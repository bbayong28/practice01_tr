import React from 'react'
import '../css/Sub01.scss'

const Sub03 = () => {
  return (
    <section className="Sub03">
      <div className="top_bg">
        <img src={process.env.PUBLIC_URL + '/assets/images/sub01_03.png'} alt="" />
        <div className="txt">
          <strong>언제든지 이용할 수 있는 뱅크</strong>
          <p>영업점에 방문없이 계좌개설, 대출신청, 해외송금, 증명서 발급까지</p>
          <p>언제든 필요한 은행 업무를 카카오뱅크 모바일앱을 통해 이용해보세요.</p>
        </div>
      </div>
      <div className="container">        
          <h2>상품안내</h2>
        <div className="inner">
          <div className='top'>
            <figure>
              <img src={process.env.PUBLIC_URL + '/assets/images/money01.png'} alt=""  />
              <div className="txt">
                <p>입출금통장</p>
                <span>까다로운 계좌개설도 정말 손쉽게</span>
              </div>
            </figure>
            <figure>
              <img src={process.env.PUBLIC_URL + '/assets/images/money02.png'} alt=""  />
              <div className="txt">
                <p>모임통장</p>
                <span>둘이, 셋이, 여럿이 함께 쓰고 같이 보는 모임통장</span>
              </div>
            </figure>
            <figure>
              <img src={process.env.PUBLIC_URL + '/assets/images/money03.png'} alt=""  />
              <div className="txt">
                <p>세이프 박스</p>
                <span>여유 자금을 따로 보관하는 계좌 속 금고</span>
              </div>
            </figure>
            <figure>
              <img src={process.env.PUBLIC_URL + '/assets/images/money04.png'} alt=""  />
              <div className="txt">
                <p>저금통</p>
                <span>조금씩 매일매일 쌓이는 저금통</span>
              </div>
            </figure>
            <figure>
              <img src={process.env.PUBLIC_URL + '/assets/images/money05.png'} alt=""  />
              <div className="txt">
                <p>정기예금</p>
                <span>실시간 이자로 돈 모으는 재미가 쏠쏠</span>
              </div>
            </figure>
            <figure>
              <img src={process.env.PUBLIC_URL + '/assets/images/money06.png'} alt=""  />
              <div className="txt">
                <p>26주 적금</p>
                <span>캐릭터와 함께  즐거운 26주간의 도전</span>
              </div>
            </figure>













          </div>





          <div className='bottom'></div>
        </div>
      </div>
    </section>
  )
}

export default Sub03