import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  MainHome,
  TextBox,
  MiniTextBox,
  Title,
  SlideTrack,
  SlideTitle,
  Slide,
  SlideItem,
  SoldOut,
  EngTitle,
  ItemTitle,
  AfterPrice,
  ImageWrap,
  ButtonBox,
  SlideImgBg,
  TotalPrice,
  Review,
  ReviewItem,
  ButtonStyles,
  MainBanner,
  YouTubeVideo,
  BeforePrice,
} from "./Home.styles";
import { productsApi } from "../../api/productsApi";
import { review } from "../../data/reviewData";
import ReviewModal from "../../components/modal/ReviewModal";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../store/productSlice";
import { addItem } from "../../store/cartSlice";
import { openModal } from "../../store/modalSlice";

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.items);

  const [selectedReview, setSelectedReview] = useState(null);
  const [reviewIsOpen, setReviewIsOpen] = useState(false);

  const slideRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await productsApi();
        dispatch(setProducts(data));
      } catch (error) {
        alert("에러발생");
      }
    }
    fetchData();
  }, [dispatch]);

  const handleMouseDown = (e) => {
    isDown.current = true;
    slideRef.current.classList.add("active");
    startX.current = e.pageX - slideRef.current.offsetLeft;
    scrollLeft.current = slideRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    slideRef.current.classList.remove("active");
  };

  const handleMouseUp = () => {
    isDown.current = false;
    slideRef.current.classList.remove("active");
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - slideRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    slideRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
    dispatch(openModal());
  };

  return (
    <MainHome>
      <MainBanner muted autoPlay loop>
        <source
          src={process.env.PUBLIC_URL + "/video/mainBanner.mp4"}
          type="video/mp4"
        />
      </MainBanner>
      <TextBox>
        <Title>WHATEVER YOU WANT</Title>
        <p style={{ margin: "10px 0", fontWeight: "700" }}>
          당신이 무엇을 원하든 두잉왓이 함께합니다.
        </p>
        <MiniTextBox>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "0.9rem",
            }}
          >
            The grooming men's choice, DOINGWHAT is It is a men's grooming brand
            to awake men's instinct for their own beauty from deep inside.
            <br />
            DOINGWHAT will follow every steps that customers walk for maximizing
            their own beauty and make themselves cool and attractive.
          </p>
          <p
            style={{
              fontWeight: "bold",
            }}
          >
            관리하는 남자들의 선택 두잉왓은남성들이 가지고 있는 내면 깊은
            곳의아름다움을 향한 본능을 일깨우고자 만든맨즈 그루밍 브랜드입니다.
          </p>
          <p>
            두잉왓은 남성 본연의 아름다움을 극대화시켜비로소 나 자신을 완성하는
            과정에함께 하고자합니다.
          </p>
        </MiniTextBox>
      </TextBox>
      <Link to="/about">
        <ButtonStyles>DOINGWHAT</ButtonStyles>
      </Link>
      <SlideTrack>
        <div>
          <SlideTitle>
            FOR YOUR DAILY ROUTINE
            <br />
            DOINGWHAT의 제품을 만나보세요
          </SlideTitle>
          <Slide
            ref={slideRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {products?.map((item) => (
              <SlideItem key={item.id}>
                <ImageWrap>
                  <img
                    src={process.env.PUBLIC_URL + item.image_url}
                    alt={item.product_title}
                    draggable="false"
                  />
                  <ButtonBox>
                    <button
                      onClick={() => {
                        handleAddToCart(item);
                      }}
                    >
                      장바구니
                    </button>
                    <Link to={`/shop/${item.id}/detail`}>자세히보기</Link>
                  </ButtonBox>
                  <SlideImgBg></SlideImgBg>
                </ImageWrap>
                <div>
                  {" "}
                  {item.isSoldOut && <SoldOut>품절</SoldOut>}
                  <ItemTitle>{item.product_title}</ItemTitle>
                  {item.eng_title && <EngTitle>{item.eng_title}</EngTitle>}
                </div>
                <BeforePrice>
                  {item.before_price.toLocaleString()}원
                </BeforePrice>
                <TotalPrice>
                  <AfterPrice>{item.after_price.toLocaleString()}원</AfterPrice>
                  {item.discountPercent === 0 ? null : (
                    <span>({item.discountPercent}%할인)</span>
                  )}
                </TotalPrice>
              </SlideItem>
            ))}
          </Slide>
        </div>
      </SlideTrack>
      <SlideTitle color="black" padding="150px 0 20px">
        REVIEW
        <br />
        두잉왓 고객님들의 베스트 리뷰를 확인해보세요
      </SlideTitle>
      <Review>
        {review.map((item) => (
          <ReviewItem
            key={item.id}
            onClick={() => {
              setSelectedReview(item);
              setReviewIsOpen(true);
            }}
          >
            <img
              src={process.env.PUBLIC_URL + item.reviewUrl}
              alt={item.userName}
            />
          </ReviewItem>
        ))}
      </Review>
      <ReviewModal
        review={selectedReview}
        isOpen={reviewIsOpen}
        onClose={() => {
          setReviewIsOpen(false);
          setSelectedReview(null);
        }}
      />
      <Link>
        <ButtonStyles>Review</ButtonStyles>
      </Link>
      <SlideTitle color="black" padding="100px 0 50px">
        CUSHION GUIDE
        <br />
        쿠션 사용법은 해당 영상을 참고하세요!
      </SlideTitle>
      <YouTubeVideo>
        <iframe width="1310" height="737" src="https://www.youtube.com/embed/Kv5vXEqn1co" title="큰 거 왔다..🔥 세상에 존재하지 않던 개기름 박멸하는 여름 필수템‼️(두잉왓 신제품 런칭)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </YouTubeVideo>
    </MainHome>
  );
}
