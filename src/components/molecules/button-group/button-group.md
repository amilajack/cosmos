```meta
  category: Layout
  description: Use a ButtonGroup to put related buttons together
```

`import { ButtonGroup } from 'auth0-cosmos'`

---

```jsx
<ButtonGroup {props}>
  <Button appearance="primary">Save changes</Button>
  <Button>Clear</Button>
</ButtonGroup>
```

## Examples

```js
<Stack>
  <ButtonGroup>
    <Button appearance="primary">Save changes</Button>
    <Button>Clear</Button>
  </ButtonGroup>
  <ButtonGroup>
    <Button icon="pencil" />
    <Button icon="copy" />
    <Button icon="delete" />
  </ButtonGroup>
</Stack>
```

```js
<Stack>
  <ButtonGroup compressed>
    <Button>Save changes</Button>
    <Button>Clear</Button>
  </ButtonGroup>
  <ButtonGroup compressed>
    <Button icon="pencil" />
    <Button icon="copy" />
    <Button icon="delete" />
  </ButtonGroup>
</Stack>
```
