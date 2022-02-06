<p align="center">
    <img src="https://w.namu.la/s/ad9c8d3717c499539b97476d2ef0460dad01707f278b44584b9f2ed23d80a7e1eed6114797fd6aa4e0fa798b15d4b3a317d8fd1e7faf3817a678e6e8f4cf2e24513ddefdecbc79734f46471a3af5268c" alr />
</p>

<h1 align="center">라디유 LANG</h1>

<p align="center">
    트위치 스트리머 <b>라디유</b>의 어록을 이용한 프로그래밍 언어입니다. <br />
    단순히 재미로 만든 언어이며, 그 어떤 목적으로도 개발이 불가능할 정도로 기능이 없습니다.
</p>

<h2>설명</h2>

- 라디유어는 `deno`를 기반으로 돌아갑니다. 개발자의 지식이 부족하여, 다른 런타임은 구현을 할 수 없습니다.
- 라디유어는 업데이트가 적습니다. 개잘자가 심심하고, 이 언어를 개발할 의욕이 생기면 그 순간이 업데이트되는 시간입니다.
- 라디유어는 `2022년 2월 6일 13시`경 스트리머 라디유의 방송을 보다가 재미없어서 만들게 되었습니다.
- 라디유어는 `플레이그라운드`를 지원하려고 합니다. 하지만 업데이트 시기는 미지수입니다. 
- 라디유 방송은 [여기](https://www.twitch.tv/radiyu) 입니다.

<h2>사용법</h2>

<h3>파일 형식</h3>

파일 형식은 `.du`입니다.

<h3>실행</h3>

`deno run --allow-read index.ts <파일 경로>`

<h3>문법</h3>

코드는 다음과 같이 작성을 해야합니다.

```du
가자!
    <이 안에 코드가 들어갑니다.>
알게모에요
```

<h4>타입</h4>

라이유어는 `숫자!`, `글자!` 이렇게 두가지 형식의 타입만 지원합니다.

<h4>변수 선언</h4>

변수는 `허어`로 선언합니다. 그리고 뒤에 타입을 필수로 작성해야 합니다.

```du
가자!
    허어 살려줘! = 100 숫자!
    허어 구해줘! = '구아아아악!' 글자!
알게모에요
```

<h4>출력 (콘솔)</h4>

출력은 `야옹`을 이용합니다.

```du
가자!
    허어 살려줘! = 100 숫자!
    허어 구해줘! = '구아아아악!' 글자!
    
    야옹 살려줘!
    야옹 구해줘!
알게모에요
```

그러면 아래와 같이 출력됩니다.

```text
요! 100
요! 구아아아악!
```

<h2>예제</h2>

코드
```du
가자!
    허어 살려줘! = '구아아아악!' 글자!
    허어 구해줘! = '갸아아아악!' 글자!
    허어 제군들! = 8 숫자!

    야옹 살려줘!
    야옹 살려줘! + 구해줘!
    야옹 제군들! * 2
알게모에요
```

출력
```text
요! 구아아아악!
요! 구아아아악!갸아아아악!
요! 16
```
