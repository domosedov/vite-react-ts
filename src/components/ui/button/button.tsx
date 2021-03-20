import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
} from 'react'
import clsx from 'clsx'

type Variants = 'red' | 'green' | 'blue'
type Sizes = 'normal' | 'big' | 'small'

const SIZES_MAP: { [key in Sizes]: string } = {
  normal: 'text-base px-4 py-2',
  big: 'text-xl px-8 py-4',
  small: 'text-xs px-2 py-1',
}

const VARIANTS_MAP: { [key in Variants]: string } = {
  blue: 'bg-blue-500 hover:bg-blue-700',
  red: 'bg-red-500 hover:bg-red-700',
  green: 'bg-green-500 hover:bg-green-700',
}

type ButtonRef = HTMLButtonElement

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

type ButtonOptions = {
  variant?: Variants
  size?: Sizes
  pulse?: boolean
  active?: boolean
}

type Props = ButtonOptions & ButtonProps

const Button = forwardRef<ButtonRef, Props>((props, ref) => {
  const {
    variant = 'blue',
    size = 'normal',
    pulse = false,
    active = false,
    ...rest
  } = props

  return (
    <button
      ref={ref}
      className={clsx(
        'text-white rounded',
        VARIANTS_MAP[variant],
        SIZES_MAP[size],
        pulse && 'animate-pulse',
        active && 'animate-spin',
      )}
      {...rest}
    />
  )
})

Button.defaultProps = {
  variant: 'blue',
}

Button.displayName = 'Button'

export { Button }
