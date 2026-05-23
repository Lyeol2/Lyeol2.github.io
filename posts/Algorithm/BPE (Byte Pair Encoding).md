---
display: BPE (Byte Pair Encoding)
description:
create: 2026-05-23
recent: 2026-05-23
tags:
---
## BPE 란?

BPE는 **Byte Pair Encoding**의 약자로, 자연어 처리에서 단어를 더 작은 단위로 쪼개는 Tokenizer 방법이다
언어 모델에서 주로 쓰는 방식이다.

말그대로 Byte 쌍을 인코딩하는 방식

예를 들어 다음 문장을 분석하려고 한다고 해보자

> 이 문장을 토큰화 시키고 싶다.

다음 문장을 여러 방법으로 쪼갤 수 있다

> 이 | 문 | 장 | 을 | | 토 | 큰 | 화 | 시 | 키 | 고 | | 싶 | 다 | . |
> 이 | 문장 | 을 | 토큰화 | 시키고 | 싶다 |

각 단어마다 쪼갠 다면 토큰의 개수가 늘어나 연산량이 늘어날 것이고,
단어 단위로 쪼개면 









## 참고 문서
[1] Philip Gage, “A New Algorithm for Data Compression” (1994)

Rico Sennrich, Barry Haddow, Alexandra Birch, “Neural Machine Translation of Rare Words with Subword Units” (ACL 2016)