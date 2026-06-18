'use client'

import type { CSSProperties, PointerEvent } from 'react'
import { useRef, useState } from 'react'

type CSSVars = CSSProperties & Record<`--${string}`, string | number>

type NetworkTextProps = {
  children: string
}

type AutomationTextProps = {
  children: string
}

type PlatformOpsTextProps = {
  children: string
}

type BlockTextProps = {
  children: string
}

type AvoidTextProps = {
  label: string
  words: string[]
}

type AvoidTextState = {
  origin: number
  scale: number
}

type NetworkOffset = {
  x: number
  y: number
  rotation: number
}

type NetworkDrag = {
  index: number
  startX: number
  startY: number
  x: number
  y: number
}

const BRAILLE_LOADER_FRAMES = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']

function createRestingOffsets(length: number) {
  return Array.from<NetworkOffset>({ length }).fill({ x: 0, y: 0, rotation: 0 })
}

function createScatterOffsets(length: number) {
  return Array.from({ length }, () => ({
    x: Number(((Math.random() * 2 - 1) * 1.25).toFixed(3)),
    y: Number(((Math.random() * 2 - 1) * 0.72).toFixed(3)),
    rotation: Number(((Math.random() * 22 - 11)).toFixed(3)),
  }))
}

function dragInfluence(index: number, drag: NetworkDrag | null) {
  if (!drag) {
    return { x: 0, y: 0, delay: 0 }
  }

  const distance = Math.abs(index - drag.index)
  const influence = distance === 0 ? 1 : Math.max(0, 0.52 - distance * 0.08)

  return {
    x: drag.x * influence,
    y: drag.y * influence,
    delay: distance * 18,
  }
}

function automationStages(characters: string[]) {
  const visibleIndexes = characters.flatMap((char, index) => (char === ' ' ? [] : [index]))
  const positions = [0.22, 0.48, 0.92]

  return positions.map((position, stage) => ({
    delay: stage * 180 + 120,
    index: visibleIndexes[Math.round((visibleIndexes.length - 1) * position)] ?? 0,
  }))
}

function platformTokens(children: string) {
  const tokenMatches = children.match(/[\w-]+|\s+|[^\w\s-]+/g) ?? [children]
  let segmentIndex = 0

  return tokenMatches.map((token) => {
    if (!/\w/.test(token)) {
      return { key: token, token, segment: undefined }
    }

    const segment = segmentIndex
    segmentIndex += 1

    return { key: `${token}-${segment}`, token, segment }
  })
}

export function NetworkText({ children }: NetworkTextProps) {
  const characters = children.split('')
  const [scatterOffsets, setScatterOffsets] = useState(() => createRestingOffsets(characters.length))
  const [drag, setDrag] = useState<NetworkDrag | null>(null)

  function scatterText() {
    if (drag) {
      return
    }

    setScatterOffsets(createScatterOffsets(characters.length))
  }

  function resetText() {
    setScatterOffsets(createRestingOffsets(characters.length))
    setDrag(null)
  }

  function handlePointerLeave() {
    if (drag) {
      return
    }

    resetText()
  }

  function handlePointerDown(event: PointerEvent<HTMLSpanElement>, index: number) {
    event.currentTarget.setPointerCapture(event.pointerId)
    setDrag({
      index,
      startX: event.clientX,
      startY: event.clientY,
      x: 0,
      y: 0,
    })
  }

  function handlePointerMove(event: PointerEvent<HTMLSpanElement>) {
    if (!drag) {
      return
    }

    setDrag((current) => {
      if (!current) {
        return current
      }

      return {
        ...current,
        x: event.clientX - current.startX,
        y: event.clientY - current.startY,
      }
    })
  }

  function handlePointerUp(event: PointerEvent<HTMLSpanElement>) {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }

    setDrag(null)
  }

  return (
    <span
      className="mi-network-text"
      data-dragging={drag ? 'true' : undefined}
      onPointerEnter={scatterText}
      onPointerLeave={handlePointerLeave}
    >
      <span className="sr-only">{children}</span>
      {characters.map((char, index) => {
        const scatter = scatterOffsets[index] ?? { x: 0, y: 0, rotation: 0 }
        const follow = dragInfluence(index, drag)

        return (
          <span
            aria-hidden="true"
            className="mi-network-text__char"
            key={`${char}-${index}`}
            onPointerCancel={handlePointerUp}
            onPointerDown={(event) => handlePointerDown(event, index)}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            style={
              {
                '--follow-delay': `${follow.delay}ms`,
                '--network-drag-x': `${follow.x}px`,
                '--network-drag-y': `${follow.y}px`,
                '--network-r': `${scatter.rotation}deg`,
                '--network-x': `${scatter.x}em`,
                '--network-y': `${scatter.y}em`,
              } as CSSVars
            }
          >
            {char === ' ' ? '\u00a0' : char}
          </span>
        )
      })}
    </span>
  )
}

export function PlatformOpsText({ children }: PlatformOpsTextProps) {
  const tokens = platformTokens(children)

  return (
    <span className="mi-iac-text">
      <span className="sr-only">{children}</span>
      <span className="mi-iac-text__sizer" aria-hidden="true">
        <span className="mi-iac-text__sizer-phrase">{children}</span>
        <span className="mi-iac-text__sizer-global">ops = platform.tools</span>
      </span>
      <span className="mi-iac-text__global mi-iac-text__global--code" aria-hidden="true">
        ops = platform.tools
      </span>
      <span className="mi-iac-text__global mi-iac-text__global--plan" aria-hidden="true">
        plan{' '}
        <span className="mi-iac-text__global-loader">
          {BRAILLE_LOADER_FRAMES.map((frame, frameIndex) => (
            <span
              className="mi-iac-text__global-frame"
              key={frame}
              style={{ '--frame-delay': `${frameIndex * 42}ms` } as CSSVars}
            >
              {frame}
            </span>
          ))}
        </span>
      </span>
      <span className="mi-iac-text__words" aria-hidden="true">
        {tokens.map(({ key, segment, token }) => {
          if (segment === undefined) {
            return <span key={key}>{token}</span>
          }

          return (
            <span
              className="mi-iac-text__segment"
              key={key}
              style={{ '--iac-delay': `${720 + segment * 620}ms` } as CSSVars}
            >
              <span className="mi-iac-text__token">{token}</span>
              <span className="mi-iac-text__loader">
                {BRAILLE_LOADER_FRAMES.map((frame, frameIndex) => (
                  <span
                    className="mi-iac-text__frame"
                    key={frame}
                    style={
                      {
                        '--frame-delay': `${frameIndex * 56}ms`,
                      } as CSSVars
                    }
                  >
                    {frame}
                  </span>
                ))}
              </span>
            </span>
          )
        })}
      </span>
    </span>
  )
}

export function AutomationText({ children }: AutomationTextProps) {
  const characters = children.split('')
  const stages = new Map(automationStages(characters).map((stage) => [stage.index, stage.delay]))

  return (
    <span className="mi-autopilot-text">
      <span className="sr-only">{children}</span>
      <span className="mi-autopilot-text__letters" aria-hidden="true">
        {characters.map((char, index) => {
          const stageDelay = stages.get(index)

          return (
            <span
              className="mi-autopilot-text__char"
              key={`${char}-${index}`}
              style={{ '--auto-delay': `${index * 18}ms` } as CSSVars}
            >
              {char === ' ' ? '\u00a0' : char}
              {stageDelay !== undefined && (
                <span
                  className="mi-autopilot-text__step"
                  style={{ '--step-delay': `${stageDelay}ms` } as CSSVars}
                />
              )}
            </span>
          )
        })}
      </span>
      <span className="mi-autopilot-text__runner" aria-hidden="true" />
    </span>
  )
}

export function BlockText({ children }: BlockTextProps) {
  const blocks = [
    { x: 4, y: 58, size: 0.26 },
    { x: 14, y: 26, size: 0.22 },
    { x: 24, y: 44, size: 0.3 },
    { x: 36, y: 16, size: 0.24 },
    { x: 47, y: 54, size: 0.28 },
    { x: 60, y: 28, size: 0.3 },
    { x: 73, y: 48, size: 0.22 },
    { x: 84, y: 18, size: 0.28 },
    { x: 96, y: 40, size: 0.24 },
  ]

  return (
    <span className="mi-block-text">
      <span className="sr-only">{children}</span>
      <span className="mi-block-text__plain" aria-hidden="true">
        {children}
      </span>
      <span className="mi-block-text__blocks" aria-hidden="true">
        {blocks.map((block, index) => (
          <span
            className="mi-block-text__block"
            key={index}
            style={
              {
                '--block-i': index,
                '--block-size': `${block.size}em`,
                '--block-x': `${block.x}%`,
                '--block-y': `${block.y}%`,
              } as CSSVars
            }
          />
        ))}
      </span>
    </span>
  )
}

export function AvoidText({ label, words }: AvoidTextProps) {
  const phraseRef = useRef<HTMLSpanElement | null>(null)
  const [phraseState, setPhraseState] = useState<AvoidTextState>({ origin: 50, scale: 1 })
  const phrase = words.join(' ')

  function handlePointerMove(event: PointerEvent<HTMLSpanElement>) {
    const phraseRect = phraseRef.current?.getBoundingClientRect()

    if (!phraseRect) {
      return
    }

    const relativeX = event.clientX - phraseRect.left
    const origin = Math.max(0, Math.min(100, (relativeX / phraseRect.width) * 100))

    setPhraseState({
      origin: Number(origin.toFixed(2)),
      scale: 0.82,
    })
  }

  function resetOffsets() {
    setPhraseState({ origin: 50, scale: 1 })
  }

  return (
    <span
      className="mi-scale-text"
      onPointerLeave={resetOffsets}
      onPointerMove={handlePointerMove}
      ref={phraseRef}
    >
      <span className="sr-only">{label}</span>
      <span className="mi-scale-text__measure" aria-hidden="true">
        {phrase}
      </span>
      <span
        className="mi-scale-text__phrase"
        aria-hidden="true"
        style={
          {
            '--avoid-origin': `${phraseState.origin}%`,
            '--avoid-scale': phraseState.scale,
          } as CSSVars
        }
      >
        {phrase}
      </span>
    </span>
  )
}
