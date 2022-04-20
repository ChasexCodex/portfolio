import {useEffect, useRef} from 'react'
import {select} from 'd3'
import type {DependencyList} from 'react'
import type {Selection} from 'd3'

type DOMElement = ElementTagNameMap

const useD3Ref = <K extends keyof DOMElement>(
    renderFn: (elem: Selection<DOMElement[K], undefined, null, undefined>) => void,
    deps: DependencyList = []) => {
  const ref = useRef<DOMElement[K]>(null)

  useEffect(() => {
    if (ref.current) {
      renderFn(select(ref.current))
    }
  }, deps)

  return ref
}

export default useD3Ref
