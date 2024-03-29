# Happy Coding with virtual mouse


# Happy Coding
![intro](https://github.com/madcamp-2023/Happy-Coding/assets/94510731/3dfff62d-5edc-401b-903b-abb0236e3dcd)

## 소스코드를 시각, 청각적으로 볼 수 있는 Happy Coding의 경험을 제공합니다.

---

- 매일같이 보는 '코드'를 다른 시각으로 바라봄으로써, 코드 속에서 행복을 찾을 수 있습니다.
- 마우스와 키보드가 아닌 virtual mouse만을 이용하여, 색다른 환경에서 코드를 대할 수 있습니다.

---

### a. 개발 팀원

Madcamp Week2 1분반

- 김윤서 - 고려대학교 컴퓨터학과
- 안시현 - KAIST 전기및전자공학부

---

### b. 개발 환경

- Language : React, python
- OS : Web
- IDE : Visual Studio Code

---

### c. 어플리케이션 소개

## Source Code Submit
![code_input](https://github.com/madcamp-2023/Happy-Coding/assets/94510731/8a9045b1-600d-4a50-a260-8b1d829c8c9e)


### Major Features

- 사용자의 source code를 입력값으로 받습니다.
- 배경으로는 R3F를 통해 제작한 3D 환경에 orbital control을 적용하였습니다.

## Floating Sound
![code_float](https://github.com/madcamp-2023/Happy-Coding/assets/94510731/80f93cd3-5ea7-49d9-8b02-6aec4c857c7f)


### Major Features

- 사용자의 source code를 줄 별로 나누어, 각 줄의 길이에 대응하는 크기의 박스를 보여줍니다.
- 각 박스에 마우스를 올릴 경우, 박스 크기에 비례하는 음정이 재생됩니다.

## Flying through Clouds (1)
![code_atmos](https://github.com/madcamp-2023/Happy-Coding/assets/94510731/b233d4d6-f35c-4790-82b1-472ff79c1433)

- 사용자의 source code를 줄 별로 나누어, 각 줄의 길이에 대응하는 색의 구름을 보여줍니다.
- 코드 길이와 비례하여 무작위 경로가 생성되며, 경로 사이 사이에 각 줄의 길이에 대응되는 구름이 보여집니다.
- 스크롤업으로 비행기를 앞으로 보낼 수 있습니다.

## FLying through Clouds (2)
![free_atmos (1)](https://github.com/madcamp-2023/Happy-Coding/assets/94510731/19c63a8a-3028-4685-92e4-79d9997abd29)

- 비행기를 통해 무작위로 생성된 구름 사이를 날 수 있습니다.
- 사용자는 마우스를 따라 비행기의 비행 경로를 조절할 수 있습니다.

## Rolling Balls
![code_ball](https://github.com/madcamp-2023/Happy-Coding/assets/94510731/8bcae08a-7696-491a-8a1d-36b031bc84f6)

### Major Features

- 사용자의 source code를 줄 별로 나누어, 각 줄의 길이에 대응하는 공들을 보여줍니다.
- 사용자가 공 위에 마우스를 올릴 경우, 공은 무작위 방향으로 움직입니다.

## Virtual Mouse

사용자의 손동작을 인식한 virtual mouse 기능을 추가할 수 있습니다.

### Major Features

- media-pipe를 통해 사용자 손 이미지로부터 각 관절을 인식하고 이를 좌표값으로 반환합니다.
- 좌표값 사이의 관계를 계산하여 여러가지 손동작과 마우스 및 키보드 이벤트에 매핑합니다.

  
### 기능 설명
pyautogui의 일부 기능을 손가락의 여러 동작들과 매핑하여 구현하였습니다.

- mouse cursor: 검지 손가락
- click: 손가락 V 표시 작게
- scroll-up: 손가락 V 표시 크게
- scroll-down: 손가락 V 반대표시 크게
- space: 손가락 펼치기

Virtual Mouse : https://github.com/madcamp-2023/Virtual-Mouse.git
