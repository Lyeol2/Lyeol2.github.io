---
display: CMake 사용법
description:
create: 2026-05-25
recent: 2026-05-25
tags:
---
## 1. 설치
설치는 따로 서술하지 않겠다.
설치할 일이 있으면 채워 넣어야지
해당 글에선 cmake 문법에 대해서 서술


## 2. CMake 기본
```cpp
# ProjectA CMakeList.txt

  

cmake_minimum_required(VERSION 3.20)

# 프로젝트 이름 및 버전

PROJECT ( "Project_144MB" )

SET ( PROJECT_VERSION_MAJOR 0 )
SET ( PROJECT_VERSION_MINOR 1 )
SET ( OUTPUT_ELF "${CMAKE_PROJECT_NAME}-${PROJECT_VERSION_MAJOR}.${PROJECT_VERSION_MINOR}")

  

# 빌드 형상(Configuration) 및 주절주절 Makefile 생성 여부

SET ( CMAKE_BUILD_TYPE Debug )
SET ( CMAKE_VERBOSE_MAKEFILE true )
SET ( CMAKE_CXX_STANDARD 20)

  
  

SET (TEST_ACTIVE TRUE)

# 빌드할 Example Code 번호

SET (EXAMPLE_NAME Example_0)

  
  
  

# 하위 폴더 추가

add_subdirectory(source)
add_subdirectory(test)
```