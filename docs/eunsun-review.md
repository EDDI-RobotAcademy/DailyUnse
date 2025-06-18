## 📁 주요 기능 구성

## 🔗 구조 요약
SearchPage.tsx
├── MenuSearch.tsx
└── CounselorSearch.tsx

MainPage.tsx
└── InnerMenuBar.tsx
    └── SignUpIntroPage.tsx (/start-jeomsin)
        └── GenderInputPage.tsx (/step2)
            └── BirthInputPage.tsx (/step3)
                └── TimeInputPage.tsx (/step4)

### 1. 검색 기능 (`/search`)
- `SearchPage.tsx`
  - 탭 전환: 메뉴 검색 / 상담사 검색
  - `useState`, `useNavigate` 사용

- `MenuSearch.tsx`
  - 자동 저장, 전체 삭제, 카테고리 필터 기능
  - 모달 UI 및 조건부 렌더링 처리

- `CounselorSearch.tsx`
  - 상담사 목록 조회, 즐겨찾기 기능 구현
  - 향후 API 연동 예정

---

### 2. 사주 입력 플로우 (`/start-jeomsin` → `/step4`)
- 단계별 화면:
  ✅ SignUpIntroPage.tsx (/start-jeomsin)
    시작 버튼 → /step2로 이동
  ✅ GenderInputPage.tsx (/step2)
    성별 선택 (남/여)
    선택 없으면 버튼 비활성화
    navigate("/step3", { state: { name, gender } })로 이동
  ✅ BirthInputPage.tsx (/step3)
    생년월일 + 양력/음력 선택
    state로 전달 받은 데이터 유지하며 다음 단계 이동
  ✅ TimeInputPage.tsx (/step4)
    출생시간 입력 or 모름 체크
    useRef 사용해 포커스 이동 처리
    모든 입력값 취합하여 마지막 단계로 넘길 준비

---

### 3. 상태 전달 방식 (전 단계 공통)
- navagate(path, {state}}로 전달
- 각 페이지에서 useLocation().state로 받아 이어감

---

### 4. 기타 사항
- 중복/하드코딩된 부분 일부 존재(리팩토링 필요)
- fakeAPI 사용
- styled-components기반 스타일링

---

<!-- 주석
public/
  ├── naver.png
  ├── kakao.png
  ├── google.png
  └── apple.png
<SNSIcon src="/naver.png" alt="Naver" />

<비회원>
https://mocki.io/v1/ea457ea8-5aa9-49b1-a44a-c0b3cdfffe56
{
  "신년운세": [
    "2025년은 누구에게나 기회의 해입니다.",
    "새로운 도전을 하기에 좋은 시기입니다.",
    "성장을 위한 기반이 다져지는 해가 될 거예요."
  ],
  "토정비결": [
    "흐름에 몸을 맡기면 좋은 결과가 따릅니다.",
    "마음먹은 대로 진행하면 무난한 해가 됩니다.",
    "운보다는 꾸준함이 더 큰 힘이 되는 시기예요."
  ],
  "정통사주": [
    "본인의 기운을 믿고 도전하는 것이 좋습니다.",
    "크게 흔들리지 않는 마음이 중요한 시기입니다.",
    "심리적 안정이 성과를 부를 수 있습니다."
  ],
  "오늘의 운세": [
    "작은 행운이 숨어 있는 하루입니다.",
    "좋은 소식이 들릴 가능성이 높습니다.",
    "작은 실천이 큰 성과로 이어질 수 있어요."
  ],
  "내일의 운세": [
    "예상치 못한 기회가 찾아올 수 있습니다.",
    "내일은 휴식과 충전이 필요한 날입니다.",
    "가까운 사람과의 관계에서 힌트를 얻을 수 있어요."
  ],
  "지정일 운세": [
    "특별한 날에 특별한 일이 생길 수 있습니다.",
    "원하는 날을 마음속에 그리고 집중하세요.",
    "그날의 직감이 옳을 확률이 높습니다."
  ]
}
-->
