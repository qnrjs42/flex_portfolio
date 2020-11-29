
## asdasd


<br />

---

## 수직, 수평 중앙 배치

기존 방식
```css
div {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

flex 방식
```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
}
```