import React, { FC, useEffect, useState } from 'react'
import cn from 'clsx'

type Props = {
  show: boolean
}

export const Fade: FC<Props> = ({ children, show = false }) => {
  const [shouldRender, setRender] = useState(show)

  useEffect(() => {
    if (show) setRender(true)
  }, [show])

  const onAnimationEnd = () => {
    if (!show) setRender(false)
  }

  return shouldRender ? (
    <div
      className={cn(show ? 'animate-fadeIn' : 'animate-fadeOut')}
      onAnimationEnd={onAnimationEnd}
    >
      <div>{children}</div>
    </div>
  ) : null
}
