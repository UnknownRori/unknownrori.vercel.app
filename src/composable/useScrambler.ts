import { ref, onUnmounted, type Ref } from 'vue'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'

interface ScrambleOptions {
  duration?: number
  interval?: number
  chars?: string
  autoPlay?: boolean
}

interface ScrambleReturn {
  displayText: Ref<string>
  isPlaying: Ref<boolean>
  scramble: () => void
  stop: () => void
}

export function useScrambler(finalText: string, options: ScrambleOptions = {}): ScrambleReturn {
  const {
    duration = 2000,
    interval = 50,
    chars = CHARS,
    autoPlay = false,
  } = options

  const displayText = ref<string>(finalText)
  const isPlaying = ref<boolean>(false)
  let timer: ReturnType<typeof setInterval> | null = null

  function scramble(): void {
    if (isPlaying.value) return
    isPlaying.value = true

    const steps = duration / interval
    let step = 0

    timer = setInterval(() => {
      step++
      const progress = step / steps

      displayText.value = finalText
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' '
          if (i < Math.floor(progress * finalText.length)) return char
          return chars[Math.floor(Math.random() * chars.length)]
        })
        .join('')

      if (step >= steps) {
        clearInterval(timer!)
        timer = null
        displayText.value = finalText
        isPlaying.value = false
      }
    }, interval)
  }

  function stop(): void {
    if (timer) {
      clearInterval(timer)
      timer = null
    }
    displayText.value = finalText
    isPlaying.value = false
  }

  if (autoPlay) scramble()

  onUnmounted(() => stop())

  return { displayText, isPlaying, scramble, stop }
}
