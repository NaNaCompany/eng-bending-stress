export const tool = {
  "id": "E036",
  "title": "보 최대 굽힘응력 계산기",
  "inputs_text": "굽힘모멘트 크기 M [N·m], 중립축에서 최외곽 거리 c [m], 단면2차모멘트 I [m⁴]",
  "formula": "σ_max = M c / I",
  "output_text": "최대 굽힘 정상응력 크기 σ_max [Pa]",
  "assumptions": "M≥0, c,I>0. 선형 탄성·작은 변형·평면 유지·주축 굽힘에 한정한다. 반력·전단력도·처짐을 풀지 않고 이미 주어진 M과 I에서 한 수치만 구한다.",
  "purpose": "굽힘 응력 계산 / 실험 모멘트의 응력 환산",
  "sources": [
    {
      "label": "University of Illinois · Bending",
      "url": "https://mechref.engr.illinois.edu/sol/bending.html"
    }
  ],
  "slug": "eng-bending-stress",
  "category": "재료",
  "result_label": "최대 굽힘 정상응력 크기 σ_max",
  "result_dimension": "pressure",
  "fields": [
    {
      "key": "m",
      "label": "굽힘모멘트 크기 M",
      "dimension": "torque",
      "example": 1000,
      "constraint": "nonnegative",
      "display_unit": "Nm",
      "display_value": "1000"
    },
    {
      "key": "c",
      "label": "중립축~최외곽 거리 c",
      "dimension": "length",
      "example": 0.05,
      "constraint": "positive",
      "display_unit": "mm",
      "display_value": "50"
    },
    {
      "key": "i",
      "label": "단면2차모멘트 I",
      "dimension": "areaInertia",
      "example": 1e-06,
      "constraint": "positive",
      "display_unit": "mm4",
      "display_value": "1000000"
    }
  ],
  "site": "https://nanalab.kr/eng-bending-stress/",
  "repository": "https://github.com/NaNaCompany/eng-bending-stress",
  "condition": "",
  "output_unit": "MPa"
};
