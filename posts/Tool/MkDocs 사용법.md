---
display: MkDocs 사용법
description: Python 개발 문서 정리를 해보자
create: 2026-05-25
recent: 2026-05-25
tags:
---
## 1. 설치

```
pip3 install mkdocs

# mkdocs 버전확인
mkdocs --version
```


## 2. 프로젝트 생성
```
mkdocs new <프로젝트이름>
```

![[MkDocs 사용법_image-1.png]]


## 3. 서버 접속

```
# 이렇게 열면 로컬에서만 접속가능
mkdocs serve

# 외부접속을 허용하려면..
mkdocs serve -a 0.0.0.0:8000

#백그라운드 실행
nohup mkdocs serve -a 0.0.0.0:8000 > mkdocs.log 2>&1 &
```

![[MkDocs 사용법_image-2.png]]


## 4. 테마 변경

[https://github.com/mkdocs/mkdocs/wiki/MkDocs-Themes](https://github.com/mkdocs/mkdocs/wiki/MkDocs-Themes)
위 링크에서 원하는 테마를 적용해서 사용

필자는 아래 테마를 적용해봄
```
pip install mkdocs-rtd-dropdown
```

내부의 yml 파일에도 수정을 해줘야함
```
- mkdocs.yml

site_name: My Docs

theme:
  name: 'rtd-dropdown'

```

![[MkDocs 사용법-image-3.png]]