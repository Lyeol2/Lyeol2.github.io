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

예를 들어 다음 문장을 분석하려고 한다고 해보자

> 이 문장을 토큰화 시키고 싶다.

다음 문장을 여러 방법으로 쪼갤 수 있다

> 이 | 문 | 장 | 을 | | 토 | 큰 | 화 | 시 | 키 | 고 | | 싶 | 다
> 이 | 문장 | 을 | 토큰화 | 시키고 | 싶다 |

각 글자마다 쪼갠 다면 토큰의 개수가 늘어나 연산량이 늘어날 것이고, 단어 단위로 쪼개면 처음나오는 단어는 처리하기가 힘들어진다. 하단의 논문에서는 BPE의 이론을 제시한다. 아랫글에서 서술하듯 압축 알고리즘으로부터 탄생한 방법이다

> [!NOTE] A New Algorithm for Data Compression - Philip Gage, 1994
> 많은 압축 알고리즘은 자주 등장하는 비트 패턴을 더 짧은 표현으로 대체한다. 여기서 내가 제시하는 간단한 방식은, 자주 등장하는 **바이트 쌍**을 하나의 바이트로 대체하는 것이다.

어렵게 생각할 필요없이 자주 나오는 글자를 뭉쳐서 하나의 바이트로 대체한다고 생각하면 된다. 아래 느낌처럼 압축되지 않을까.

> 이 | 문장 | 을 | 토큰 | 화시 | 키고 | 싶다

토큰의 량을 줄여야하며, 메모리를 아껴야하는 AI의 특성상 잘 맞는 압축방식이라고 할 수 있다.
추가적으로 사용량에 따라 subword를 만들다보면, 사과나무 -> 사과 / 나무 처럼 다음 연산처리에 용의하도록 단어가 쪼개질수도 있고 한국어의 를/을/에/가 처럼 조사를 처리하는데 있어서도 강점을 보일 수 있다.






## 참고 문서
[1] Philip Gage, “A New Algorithm for Data Compression” (1994)

[2] Rico Sennrich, Barry Haddow, Alexandra Birch, “Neural Machine Translation of Rare Words with Subword Units” (ACL 2016)