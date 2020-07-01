import React, { useEffect, useState } from 'react'

import Card from 'Card';
import './Credits.css';
import { importMDX } from 'mdx.macro';

const CreditsContent = importMDX.sync('./data/Credits.mdx')
function Credits() {
  return (
    <div className="Credits">
        <CreditsContent />
    </div>
  )
}
export default Credits;