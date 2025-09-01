import { useEffect, useRef } from "react"

// useEffect should be called after the component is mounted

export default function useEffectAfterMount(
  fn: () => void,
  deps: any[] = []
) {
  const isMounted = useRef(false)

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true
      return
    }
    fn()
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [...deps])
}
