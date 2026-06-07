---
display: AI 연구일지 - 4
description: 임베딩행렬과 어텐션
create: 2026-06-01
recent: 2026-06-01
tags:
---
## 패치노트 
---
## Config
### Added
```
# 임베딩 행렬의 백터차원(열 개수)을 관리합니다. 8의 배수로 관리합니다. 기본값 256
EMBEDDING_DIM = 256
```
 
### Changed
```
# config property의 값이 대문자로 바뀝니다
max_token -> MAX_TOKEN
max_potential_token -> POTENTIAL_TOKEN
frequency_threshold -> FREQUENCY_THRESHOLD

# 이제부터 config 파일은
최상단 계층인 Liber/config.yml 위치로 변경됩니다 
```

### Fixed
### Removed


---
## Command

### Added
```
# config 파일을 열어 현재 속성과 값을 출력합니다
config

# config 파일의 <속성> 값을 수정합니다
config set <속성> <값>

# 사전을 완전히 비워서 초기화합니다
bpe clear

# 사전을 실행 초기상태로 만듭니다
bpe init 

# 임베딩 행렬을 초기상태로 만듭니다 
# vocab 개수 * EMBEDDING_DIM 그리고 랜덤한 내부 초기화
embed init

# 임베딩 행렬을 전부 비웁니다 vocab 개수 * EMBEDDING_DIM 0 으로 초기화
embed reset
```

### Changed
```
# 이제부터 파일저장은 카테고리 별로 분리 해서 저장합니다
# bpe 관련 저장 데이터 Liber/data/bpe/
# embed 관련 저장 데이터 Liber/data/embed
# 학습 관련 외부데이터 Liber/data/corpus
```


### Fixed


### Removed
```
# config 명령어로 통합시킬 예정이기 때문에 삭제하였습니다 
bpe config
bpe config (property) (value)
```


## 개발중

요로캐까지 만들어짐
![[AI Project - 4_image-1.png]]
























