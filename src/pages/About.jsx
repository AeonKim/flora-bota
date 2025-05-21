import React from 'react';

// About 컴포넌트: 아티스트 소개 페이지
function About() {
  return (
    <div className="pt-24 pb-16">
      {/* 헤더 섹션 */}
      <div className="bg-sage/10 py-12">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-cormorant font-semibold text-sage mb-4" data-aos="fade-up">About Artist</h1>
          <p className="text-base text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            자연의 세밀한 아름다움을 담아내는 작업을 15년간 이어오고 있는 보태니컬 아티스트 Flora Kim을 소개합니다.
          </p>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="container-custom py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* 왼쪽 컬럼: 프로필 이미지 및 간략 정보 */}
          <div className="lg:w-1/3" data-aos="fade-right" data-aos-duration="1000">
            <div className="sticky top-24">
              <div className="rounded-lg overflow-hidden mb-8 shadow-md">
                <img 
                  src="/assets/images/artist.png" // 실제 이미지 경로로 대체 필요
                  alt="Flora Kim 아티스트"
                  className="w-full h-auto"
                />
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8" data-aos="fade-up" data-aos-delay="150">
                <h3 className="font-montserrat text-xl font-semibold text-gray-800 mb-4">Flora Kim</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-sage mr-2">•</span>
                    <span>보태니컬 아티스트</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage mr-2">•</span>
                    <span>서울 기반 활동</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage mr-2">•</span>
                    <span>GPTERS대학교 식물학과 시각예술 전공</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage mr-2">•</span>
                    <span>영국 왕립식물원 큐가든 보태니컬 일러스트레이션 과정 수료</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6" data-aos="fade-up" data-aos-delay="300">
                <h3 className="font-montserrat text-xl font-semibold text-gray-800 mb-4">Skills</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">수채화</span>
                      <span className="text-sage">전문</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-sage h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">색연필</span>
                      <span className="text-sage">전문</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-sage h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">식물학적 정확성</span>
                      <span className="text-sage">전문</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-sage h-2 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">디지털 일러스트레이션</span>
                      <span className="text-sage">숙련</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-sage h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 오른쪽 컬럼: 메인 콘텐츠 */}
          <div className="lg:w-2/3" data-aos="fade-left" data-aos-duration="1000">
            <div className="prose prose-lg max-w-none">
              
              <p className="mb-6 leading-relaxed" data-aos="fade-up">
                Flora Kim은 서울을 기반으로 활동하는 보태니컬 아티스트로, 자연의 세밀한 아름다움을 담아내는 작업을 15년간 이어오고 있습니다. GPTERS대학교에서 식물학과 시각예술을 전공한 후, 영국 왕립식물원 큐가든에서 보태니컬 일러스트레이션 과정을 수료했습니다.
              </p>
              
              <p className="mb-6 leading-relaxed" data-aos="fade-up" data-aos-delay="150">
                Flora Kim의 작품은 과학적 정확성과 예술적 감성의 균형을 추구합니다. 주로 수채화와 색연필을 사용하여 한국의 토착 식물과 멸종 위기 식물을 세밀하게 기록하는 작업에 중점을 두고 있으며, 식물의 생명력과 아름다움을 통해 자연 보존의 중요성을 전달하고자 합니다.
              </p>
              
              <blockquote className="border-l-4 border-sage pl-4 py-2 italic text-gray-700 my-8" data-aos="fade-up" data-aos-delay="200">
                "식물은 무한한 인내와 적응력을 가진 존재입니다. 그들의 이야기를 시각적으로 담아내는 것은 인간과 자연의 공존에 대해 깊이 생각하게 합니다."
              </blockquote>
              
              <p className="mb-6 leading-relaxed" data-aos="fade-up" data-aos-delay="250">
                Flora Kim은 작품 활동과 함께 보태니컬 아트의 대중화를 위한 교육 활동에도 적극적으로 참여하고 있습니다. 다양한 연령층과 경험 수준을 가진 학생들을 위한 맞춤형 워크숍과 정규 강의를 통해 보태니컬 아트의 기초부터 전문적인 기법까지 폭넓게 가르치고 있습니다.
              </p>
              
              <p className="mb-6 leading-relaxed" data-aos="fade-up" data-aos-delay="300">
                특히 식물 관찰법, 색 혼합 기법, 식물의 구조적 이해와 같은 보태니컬 아트의 핵심 요소들을 쉽고 체계적으로 전달하는 교육 방법론을 개발하여 많은 학생들로부터 호평을 받고 있습니다.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                <div className="rounded-lg overflow-hidden shadow-sm" data-aos="zoom-in" data-aos-delay="150">
                  <img 
                    src="/assets/images/artist-work1.jpg" // 실제 이미지 경로로 대체 필요
                    alt="작업 중인 Flora Kim 아티스트"
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-sm" data-aos="zoom-in" data-aos-delay="300">
                  <img 
                    src="/assets/images/artist-work2.jpg" // 실제 이미지 경로로 대체 필요
                    alt="필드 스케치 중인 Flora Kim 아티스트"
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              <p className="mb-6 leading-relaxed" data-aos="fade-up" data-aos-delay="350">
                Flora Kim은 앞으로도 한국의 토착 식물과 멸종 위기 식물들을 기록하는 작업을 계속하며, 특히 계절에 따른 식물의 변화를 담는 장기 프로젝트에 집중할 계획입니다. 또한 디지털 매체를 활용한 보태니컬 아트의 새로운 가능성을 모색하고, 환경 보존 단체들과의 협업을 통해
                예술이 환경 보호에 기여할 수 있는 방안을 모색하고 있습니다.
              </p>
              
              <p className="mb-6 leading-relaxed" data-aos="fade-up" data-aos-delay="400">
                예술과 과학, 전통과 현대, 아름다움과 정확성 사이의 균형을 찾아가는 Flora Kim의 작품 세계는 앞으로도 계속 발전할 것입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; 