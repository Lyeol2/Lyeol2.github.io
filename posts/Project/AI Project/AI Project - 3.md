---
display: AI 연구일지 - 3
description: 명령 프롬포트 환경으로 변경
create: 2026-05-24
recent: 2026-05-24
tags:
---
gui를 개발하는건 좋은데 시간이 너무 많이쓰여서 bpe관련 기능을 console로 대부분 옮겼다
![[AI Project - 3_image-0.png]]
빈도에 따라 분리가 잘되는걸 볼수있다.

## 개발 기본 명령어
어플리케이션을 종료합니다
stop

어플리케이션을 재시작합니다 python 코드를 다시 읽어 로드합니다
reload

웹 gui 를 엽니다
web

AI를 실행합니다
run <문장>


## BPE 학습 명령어
-l : 문장명령어
-f : 파일 명령어

문장을 입력받고 토큰단위로 쪼개서 사전에 학습시킵니다
bpe train -l (value)
파일 전체를 읽어 문장단위로 쪼갠뒤 토큰단위로 쪼개 사전에 학습시킵니다
bpe train -f (filepath)
파일 config를 출력합니다
bpe config
파일 config를 수정합니다
bpe config (property) (value)
토큰단어가 포함된 모든 토큰쌍을 찾아서 출력합니다
bpe find (token)

사전을 출력합니다.
bpe list -a/-m -a/-d (value)

추가 명령어
bpe save 파일이름 (사전을 저장합니다) 

## BPE 시스템 Config
max_token : 저장될 수 있는 최대 토큰 개수 (Embedding 행렬의 최대 행의 값)
max_potential_token  : bpe 사전내에 들어가기전 임시 컨테이너의 최대크기
frequency_threshold : potential_token에서 token 이 되기위한 최소 빈도수

## BPE 시스템
BPE (Byte Pair Encoding)

Token : 사전의 단어 하나, 쌍이 될수 있고 하나의 글자가 될수도 있고 토큰이모여 새 토큰을 이룰수도 있다.
Potential Token : 토큰이 될수 있는 잠재를 가진 예비토큰 빈도수가 늘어 사전내의 단어를 제치고 들어갈 수 있다.

### bpe 작동 규칙
토큰 ▁는 합성시키지 않는다
여러 문장이 들어간 글은 한 문장 단위로 쪼개서 학습한다
등장 빈도가 최소 빈도수 보다 높다면 bpe 사전 내에 들어가게 된다



