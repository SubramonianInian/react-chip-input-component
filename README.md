# react-chip-input-component

> Provides a chip input component. 
 
 ## Demo

 ![GIF Example](./chip-input.gif)

## Install 
```bash
npm i react-ui-chip-input
```

## Example

```tsx
import React, { useState } from 'react'

import {Chip} from 'react-ui-chip-input'

const ReactChips = () => {
  const [chips, setChips] = useState([])

  return (
    <div className='container'>
      <Chip
        placeholder='Type and Enter'
        chips={chips}
        setChips={setChips}
        chipPrefix='#'
      />
    </div>
  )
}

export default ReactChips
```


