---
display: AI 연구 일지 - 2
description: 간단한 AI 모델 개발
create: 2026-05-23
recent: 2026-05-23
tags:
  - devlog
---
앞서서 Tokenizer에 대한 고민을 많이 해봤다. BERT 모델 위에 작업을 하기보다 처음부터 BPE (Byte pair Embedding) 을 활용해서 나만의 토크나이저를 만들어보는게 어떨까 싶어서 작업해봤다.

![[AI Project - 2_image-1.png]]

위 이미지는 연구하기위에 개발한 간단한 AI 모델이다 Attention과 FFN까지 구현되었지만 다음에 다루어보겠다. 

간단하게 토크나이저를 구현하기위한 이론문서는 아래를 참고

> [[BPE (Byte Pair Encoding)]]
