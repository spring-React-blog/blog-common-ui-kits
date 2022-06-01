# 💻 blog-common-ui-kits
### 스토리북 페이지
- https://spring-react-blog.github.io/blog-common-ui-kits/

<br />

### npm 배포
- https://spring-react-blog.github.io/blog-common-ui-kits/

<br />


### 프로젝트 의존성 설치
- yarn 또는 npm으로 의존성 설치를 할 수 있지만 의존하는 파일이 package-lock.json, yarn.lock으로 분리되기 때문에 하나로 통일 (기존 yarn으로 진행)
```
# 의존성 설치
yarn
```
<br />

### 폴더 구조 설명 특정 파일 설명
- .storybook: 스토리북 기본 셋팅 폴더
- src: 메인 작업 폴더
    - components: 컴포넌트 작업 폴더
    - shared: theme 등 프로젝트 전반적으로 공유되는 공통 변수 작업 폴더
    - types: 타입 모음 폴더
    - utils: 유틸 함수 모음 폴더
    - stories: 스토리북 작업 폴더

- .npmignore: npm에 배포되는 파일 또는 폴더를 제외할 수 있는 파일(ex. 스토리북 관련 파일은 필요없어서 제거)

<br />

### 빌드 및 배포
- 컴포넌트 작업 후 `build`, build 파일들은 `dist` 폴더에 생성
- 배포 시 주의 사항은 package.json 버전 수정해줘야 함
```
# 빌드
yarn build

# npm 배포
npm publish
```

<br />

### 스토리북 빌드, 배포, 개발 서버 실행
- yarn build:storybook을 진행하면 `storybook-static` 폴더 가 생성된다.
- yarn deploy:storybook을하면 `storybook-static`을 기반으로 깃허브 페이지 배포 진행
```
# 개발 서버 실행
yarn storybook

# 빌드
yarn build:storybook

# 배포
yarn deploy:storybbok
```

<br />

### 패키지 설치 후 컴포넌트 사용법
```
# 패키지 설치
yarn add blog-common-ui-kits
```

<br />

```tsx
import { Button } from 'blog-common-ui-kits';

function App() {
  return <Button>Test Button</Button>
}
```

<br />

### git flow (가이드라인, 논의 필요)
- main: 메인 브랜치, npm 배포 브랜치
- dev: 메인 개발 브랜치 각 기능 브랜치들이 하나로 병합되는 지점
- feature: 각 기능 개발 브랜치, 실제 브랜치명은 구현 기능명
- hotfix: 에러 수정 브랜치

<br />

### commit message 컨벤션 (가이드라인, 논의 필요)
- feat: 새로운 기능의 추가
- imp: 기존에 존재하는 기능 개선
- fix: 버그수정
- docs: 문서 수정
- refac: 코드 리팩토링
- chore: 빌드 부분 혹은 패키지 매니저 수정사항

<br />

### commit message rule (가이드라인, 논의 필요)
- 커밋 메시지 마지막에 작업에대한 관련 issue 번호를 붙여줌 -> 이슈 트랙킹을 위함
- ex) feat: Button 공통 컴포넌트 작업 #1

<br />

### 작업 프로세스 (가이드라인, 논의 필요)
```
1. 작업 대한 issue 등록
2. dev 브랜치를 기준에서에서 feature branch를 생성 후 작업 진행 ex) button, select
3. 작업이 완료되면 pull request 보낸다 (리뷰어로 팀원들 등록)
4. 코드 리뷰 진행
5. feature -> dev로 merge
6. 1 ~ 5번 반복
7. 어느정도 작업이 됬고 팀원들과 논의 후 npm 배포 시점되면 dev -> main merge
8. npm 배포 진행
```

<br />
