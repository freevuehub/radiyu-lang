<p align="center">
    <img src="https://w.namu.la/s/ad9c8d3717c499539b97476d2ef0460dad01707f278b44584b9f2ed23d80a7e1eed6114797fd6aa4e0fa798b15d4b3a317d8fd1e7faf3817a678e6e8f4cf2e24513ddefdecbc79734f46471a3af5268c" />
</p>

<h1 align="center">라디어 - 라디유 LANG</h1>

<p align="center">
    트위치 스트리머 <b>라디유</b>의 어록을 이용한 프로그래밍 언어입니다. <br />
    단순히 재미로 만든 언어이며, 그 어떤 목적으로도 개발이 불가능할 정도로 기능이 없습니다.
</p>

<h2>설명</h2>

- 라디유어는 `deno`를 기반으로 돌아갑니다. 개발자의 지식이 부족하여, 다른 런타임은 구현을 할 수 없습니다.
- 라디유어는 업데이트가 적습니다. 개발자가 심심하고, 이 언어를 개발할 의욕이 생기면 그 순간이 업데이트되는 시간입니다.
- 라디유어는 `2022년 2월 6일 13시`경 스트리머 라디유의 방송을 보다가 심심해서 만들게 되었습니다.
- 라디유어는 `플레이그라운드`를 지원하려고 합니다. 하지만 업데이트 시기는 미지수입니다.
- 언제나 최신 버전으로 이용해주셔야 합니다.
- 플레이 그라운드는 [여기](https://du.freevue.dev) 입니다.
- 라디유 방송은 [여기](https://www.twitch.tv/radiyu) 입니다.

<h2>사용법</h2>

<h3>파일 형식</h3>

파일 형식은 `.du`입니다.

<h3>실행</h3>

`deno run -A https://deno.land/x/radiyu/mod.ts <파일 경로>`

<h3>문법</h3>

코드는 다음과 같이 작성을 해야합니다.

```du
가자!
  <이 안에 코드가 들어갑니다.>
머찐 라디유!
```

<h4>타입</h4>

라디유어는 `숫자!`, `글자!` 이렇게 두가지 형식의 타입만 지원합니다.

<h4>변수 선언</h4>

변수는 `허어`로 선언합니다. 그리고 뒤에 타입을 필수로 작성해야 합니다.

```du
가자!
  허어 너는 = 100 숫자!
  허어 나는 = 앙냥냥 글자!
머찐 라디유!
```

<h4>출력 (콘솔)</h4>

출력은 `야옹`을 이용합니다.

```du
가자!
  허어 너는 = 100 숫자!
  허어 나는 = 앙냥냥 글자!
  
  야옹 너는
  야옹 나는
머찐 라디유!
```

그러면 아래와 같이 출력됩니다.

```text
100
앙냥냥
```

<h4>함수</h4>

함수는 `킹짱룡 [이름] <[...매개변수]>`으로 선언합니다.

실행은 `웡! [이름] <[...매개변수]>`을 앞에 붙혀서 실행합니다.

```du
가자!
  킹짱룡 다이노소어 <아이큐>
    허어 나는 = 라디유 글자!
    
    야옹 나는
    야옹 '아이큐는'
    야옹 아이큐
    야옹 '입니다.'
  <<<
  
  웡! 다이노소어 <100 숫자!>
머찐 라디유!
```

아래와 같이 출력됩니다.

```text
라디유
아이큐는
100
입니다.
```

<p align="center">
    이걸 왜 만들었을까...
</p>

<h2>히스토리</h2>

- **2022년 2월 6일**
  - 기획을 하고 개발을 시작했습니다.
  - 단순히 선언, 출력, 조건문만 지원해보고자 했습니다.
- **2022년 2월 13일**
  - 조금 더 코드를 정리해보려고 했습니다.
  - 규칙을 약간 수정했습니다.
  - 함수도 지원하기로 했습니다.
- **2022년 2월 18일**
  - 버그가 있다는 제보를 받아 소스를 전체적으로 뜯어 고쳤습니다.
  - 사칙연산을 지원하지만, 정답이 나올 확률은 `20%`입니다. 왜냐하면, `라디유`이니까요.
  - 몇가지 이스터에그가 있습니다.
  - 조만간 웹사이트를 지원하여, 브라우저에서도 사용할 수 있게 만들 계획입니다.
  
<h2>그냥 하는 말</h2>

- **2022년 2월 18일**
  - 컨트리뷰터가 생겼습니다. 감사합니다.
  - 만들기 너무 귀찮습니다.
  - 뭐 일주일 단위로 업데이트는 되네요.
