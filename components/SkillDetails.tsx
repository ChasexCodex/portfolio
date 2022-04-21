import useD3Ref from '../hooks/useD3Ref'
import {skills} from '../data'

type Skill = {
  level: number
  name: string
  years: number
}

const SkillDetails = () => {
  const ref = useD3Ref<'div'>(div => {
    const containers = div
        .selectAll()
        .data(skills as Skill[])
        .join('div')
        .attr('class', 'h-20 rounded-xl w-full bg-purple-600 px-4')

    const texts = containers
        .append('p')
        .attr('class', 'text-2xl bg-white max-w-max px-2 rounded-lg my-2 py-0.5 font-semibold')
        .text(d => d.name)

    const svgs = containers
        .append('svg')
        .attr('width', '100%')

    const barBorders = svgs
        .append('g')
        .append('rect')
        .attr('width', '100%')
        .attr('height', 20)
        .attr('fill', 'gray')
        .attr('rx', 5)

    const bars = svgs
        .append('g')
        .attr('class', 'px-1')
        .append('rect')
        .attr('width', d => `${d.level}%`)
        .attr('height', 20)
        .attr('fill', '#fc701a')
        .attr('rx', 4)
  })


  return <div className="w-full h-full flex flex-row">
    <div ref={ref} className="w-1/2 h-full ml-auto flex flex-col text-black space-y-2"/>
  </div>
}

export default SkillDetails
