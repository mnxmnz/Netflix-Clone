<p align="center">
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FETogT%2FbtqW8GKKIFG%2FPaktuUX4yLMoDgTRopmLI0%2Fimg.jpg" alt="Logo" width="150" height="150">
</p>

<h2 align="center">Netflix-Clone</h2>

<br>

## 📑 레포 소개

- SOPT 27기 웹 파트 디자인-클라이언트 합동 세미나 코드 정리 레포입니다.

- React를 활용하여 Netflix 메인 페이지와 상세 페이지 클론을 진행했습니다.

## ✨ 주요 기능

### 📽 Main

![Main](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbivY3V%2FbtqW8FSBwKg%2Fairfi3pBtnuoKJxSOPHkoK%2Fimg.png)

💡 Main

- [1] 메인 영상 상단에 표시

- [2] 영상 클릭하면 해당 유튜브로 이동

### 📽 Detail

![Detail](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FowzjP%2FbtqW8HiAe0x%2FE3bmMmnS7FawqkWpqEgs6k%2Fimg.png)

💡 Detail

- [1] 시즌 버튼을 선택하여 이동

- [2] 마우스 hover를 통해 등장 인물 표시

## 🗂 프로젝트 구조

```
src
 ┣ assets
 ┃ ┣ detailheadericon
 ┃ ┃ ┣ btn_sqcheck_pressed.svg
 ┃ ┃ ┣ ...
 ┃ ┃ ┗ btn_sqtu_unpressed.svg
 ┃ ┣ detailinformation
 ┃ ┃ ┣ btn_leftmore.svg
 ┃ ┃ ┣ ...
 ┃ ┃ ┗ maturity_graph.svg
 ┃ ┣ homeheadericon
 ┃ ┃ ┣ btn_gift.png
 ┃ ┃ ┣ ...
 ┃ ┃ ┗ netflix_logo.png
 ┃ ┣ homemenuicon
 ┃ ┃ ┗ ic_search.png
 ┃ ┣ homerowicon
 ┃ ┃ ┣ ic_netflix_symbol.svg
 ┃ ┃ ┗ img_top10.svg
 ┃ ┣ mute
 ┃ ┃ ┣ btn_sndoff.svg
 ┃ ┃ ┗ btn_sndon.svg
 ┃ ┣ seasonicon
 ┃ ┃ ┣ bottomArrow.svg
 ┃ ┃ ┗ seasonPlayButton.svg
 ┃ ┣ watchinglevel
 ┃ ┃ ┣ ic_all.svg
 ┃ ┃ ┣ ...
 ┃ ┃ ┗ ic_twelve.svg
 ┃ ┣ closebutton.svg
 ┃ ┣ download.svg
 ┃ ┗ Play.svg
 ┣ components
 ┃ ┣ common
 ┃ ┃ ┣ BlankTop.js
 ┃ ┃ ┣ ...
 ┃ ┃ ┗ Tttle.js
 ┃ ┣ detail
 ┃ ┃ ┣ detailInformation
 ┃ ┃ ┃ ┣ footer
 ┃ ┃ ┃ ┃ ┣ FooterInner.js
 ┃ ┃ ┃ ┃ ┗ FooterLeft.js
 ┃ ┃ ┃ ┣ DetailInformation.js
 ┃ ┃ ┃ ┣ ...
 ┃ ┃ ┃ ┗ RightMoreButton.js
 ┃ ┃ ┣ information
 ┃ ┃ ┃ ┣ InformationContent.js
 ┃ ┃ ┃ ┗ InformationWrap.js
 ┃ ┃ ┣ maincombine
 ┃ ┃ ┃ ┣ recommend
 ┃ ┃ ┃ ┃ ┣ DesktopRecommendCard.js
 ┃ ┃ ┃ ┃ ┣ ...
 ┃ ┃ ┃ ┃ ┗ RecommendCombine.js
 ┃ ┃ ┃ ┣ season
 ┃ ┃ ┃ ┃ ┣ header
 ┃ ┃ ┃ ┃ ┃ ┣ SeasonHeaderLeftWrap.js
 ┃ ┃ ┃ ┃ ┃ ┣ SeasonHeaderWrap.js
 ┃ ┃ ┃ ┃ ┃ ┗ SeasonNav.js
 ┃ ┃ ┃ ┃ ┣ DesktopPlayerCard.js
 ┃ ┃ ┃ ┃ ┣ ...
 ┃ ┃ ┃ ┃ ┗ SeasonWrap.js
 ┃ ┃ ┃ ┣ MainCombine.js
 ┃ ┃ ┃ ┣ MobileMainNav.js
 ┃ ┃ ┃ ┗ MoreButton.js
 ┃ ┃ ┣ player
 ┃ ┃ ┃ ┣ footer
 ┃ ┃ ┃ ┃ ┣ FooterCheckBoxDown.js
 ┃ ┃ ┃ ┃ ┣ ...
 ┃ ┃ ┃ ┃ ┗ FooterWrap.js
 ┃ ┃ ┃ ┣ header
 ┃ ┃ ┃ ┃ ┣ CloseButton.js
 ┃ ┃ ┃ ┃ ┣ HeadWrap.js
 ┃ ┃ ┃ ┃ ┗ WatchingLevel.js
 ┃ ┃ ┃ ┗ PlayerWrap.js
 ┃ ┃ ┣ DetailInner.js
 ┃ ┃ ┣ DetailOverlay.js
 ┃ ┃ ┗ DetailWrapper.js
 ┃ ┗ home
 ┃ ┃ ┣ BannerComponent.js
 ┃ ┃ ┣ ...
 ┃ ┃ ┗ RowComponent.js
 ┣ containers
 ┃ ┣ common
 ┃ ┃ ┗ MuteButtonContainer.js
 ┃ ┣ detail
 ┃ ┃ ┣ maincombine
 ┃ ┃ ┃ ┣ recommend
 ┃ ┃ ┃ ┃ ┗ RecommendCombineContainer.js
 ┃ ┃ ┃ ┣ season
 ┃ ┃ ┃ ┃ ┗ SeasonCombineConatainer.js
 ┃ ┃ ┃ ┗ MainCombineContainer.js
 ┃ ┃ ┣ player
 ┃ ┃ ┃ ┣ footer
 ┃ ┃ ┃ ┃ ┣ DownContainer.js
 ┃ ┃ ┃ ┃ ┣ ...
 ┃ ┃ ┃ ┃ ┗ UpContainer.js
 ┃ ┃ ┃ ┗ header
 ┃ ┃ ┃ ┃ ┗ CloseButtonContainer.js
 ┃ ┃ ┗ DetailWrapperContainer.js
 ┃ ┗ home
 ┃ ┃ ┣ BannerContainer.js
 ┃ ┃ ┣ ...
 ┃ ┃ ┗ RowContainer.js
 ┣ libs
 ┃ ┗ api.js
 ┣ pages
 ┃ ┣ DetailPage.js
 ┃ ┗ HomePage.js
 ┣ App.js
 ┣ App.test.js
 ┣ index.css
 ┣ index.js
 ┣ logo.svg
 ┣ reportWebVitals.js
 ┗ setupTests.js
```

## 🛠 사용 기술 및 라이브러리

| Front-End           | Design Tool         |
| ------------------- | ------------------- |
| Javascript<br>React | Figma               |

```
"@testing-library/jest-dom": "^5.11.6",
"@testing-library/react": "^11.1.2",
"@testing-library/user-event": "^12.2.2",
"axios": "^0.21.0",
"react": "^17.0.1",
"react-dom": "^17.0.1",
"react-router-dom": "^5.2.0",
"react-scripts": "4.0.0",
"styled-components": "^5.2.1",
"web-vitals": "^0.2.4"
```

## 🖥 Local 실행 방법

#### [1] Yarn 설치

[Yarn 설치 바로가기](https://classic.yarnpkg.com/en/docs/install#windows-stable)

#### [2] Clone the Repo

```sh
git clone https://github.com/mnxmnz/Netflix-Clone.git
```

```sh
cd Netflix-Clone
```

#### [3] Install Packages

```sh
yarn
```

#### [4] Run the Project

```sh
yarn start
```
