---
display: "블로그 개발 일지 #3"
description: post 기능 만들기
create: 2026-05-22
recent: 2026-05-22
tags:
---



# 개요

> **이전문서**
> #1  : [[Github Blog Dev - 1]]
> #2 : [[Github Blog Dev - 2]]

이번엔 .MD 파일을 읽고 포스트를 로드하는 기능을 만들어보았다

![[Github Blog Dev - 3.gif.gif]]

> 옵시디언 문법을 전부 읽지 못해서 링크같은건 찐빠가 난다.

# 작업과정

HTML과 CSS의 지식이 있어도, 전문 디자이너처럼 사용하는건 나에게 무리였다 그러므로 Codex, Antigravity Code Agent 를 갈궈서 결과물을 뽑아보기로 한다. 

바이브 코딩이전에 Framer나 Google Web Designer 같은걸 찾아보긴 했으나 사용하지 않기로 결정
- **Framer** 는 완성된 Web페이지를 호스팅을 해주기에, html을 직접 만질 수 없어 git page에 올리거나 커스텀 하기에 어려움이 있었다
- **Google Web Designer** 는 앱이 복잡하게 생겨서 걍 찾아보기도 전에 포기했다 머리아파잉

> 기본뼈대는 tree구조로 ai한테 던져주고 그위에서 Codex랑 Antigravity Agent 갈궜다.


## Boids 알고리즘

화면에 떠다니는 삼각형들 군집을 표현하기 위해 추가했다

한번 구현해본적있으나, 문서 소실로 인해 다시적긴 귀찮다
나중에 구현할 일이 생기면 작성해둬야겠다 링크는 아래걸어둬야지

Boids 알고리즘 문서 : [[Boids]]

## ColorPalette 툴

디자인할때 색조합 쉽게하려고 간단하게 바이브 코딩으로 개발했음

![[Github Blog Dev - 2_image.png]]

컬러픽커랑 색조합 비율정도 저장해둘 수 있는 팔레트다. 
은근 도움이 많이 되었기에 아래 Repo 달아둘테니 써보시길

```cardlink
url: https://github.com/Lyeol2/ColorPalette
title: "GitHub - Lyeol2/ColorPalette: 팔레트 도구앱"
description: "팔레트 도구앱. Contribute to Lyeol2/ColorPalette development by creating an account on GitHub."
host: github.com
favicon: https://github.githubassets.com/favicons/favicon.svg
image: https://opengraph.githubassets.com/8a40a29e53d4127d4ba1597718fbada3c2385732302903ab7b0460a266bb460c/Lyeol2/ColorPalette
```![[Github Blog Dev - 3.gif.gif]]