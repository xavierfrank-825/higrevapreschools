import './style.css'

const WA = '918123708724'
const MAIL = 'higrevapreschool26@gmail.com'
const $ = (s, r = document) => r.querySelector(s)
const $$ = (s, r = document) => [...r.querySelectorAll(s)]

// Class finder
const progs = [
  ['PlayGroup', 'Gentle first steps with songs, sensory play and new friends.'],
  ['Nursery', 'Language, early numbers and art through hands-on discovery.'],
  ['Junior KG', 'Stories, reading readiness and growing independence.'],
  ['Senior KG', 'Literacy, numeracy and thinking skills for primary school.'],
]
const result = $('#result')
$$('.chip').forEach((chip) => {
  chip.addEventListener('click', () => {
    $$('.chip').forEach((c) => c.setAttribute('aria-pressed', 'false'))
    chip.setAttribute('aria-pressed', 'true')
    const [name, text] = progs[+chip.dataset.k]
    result.innerHTML = `<b>${name}</b><p style="color:var(--mut);margin:4px 0 10px">${text}</p><a class="btn" href="#connect">Book a visit</a>`
  })
})

// Ticker
const words = ['PlayGroup', 'Nursery', 'Junior KG', 'Senior KG', 'Day care', 'Tuitions', 'Heureka curriculum']
const row = words.map((w) => `<span>${w}</span><span>✦</span>`).join('')
$('#tick').innerHTML = row.repeat(4)

// Parent / professional tabs
const tabs = $$('.tab')
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((t) => {
      const on = t === tab
      t.setAttribute('aria-selected', on)
      const panel = document.getElementById(t.getAttribute('aria-controls'))
      panel.hidden = !on
      panel.classList.toggle('on', on)
    })
  })
})

// Forms: open WhatsApp or email with a ready message (no backend needed)
$('#fParent').addEventListener('submit', (e) => {
  e.preventDefault()
  const f = new FormData(e.target)
  const msg = `Hello HIGREVA, I’m ${f.get('n')}. I’m interested in ${f.get('s')} at your Marathahalli centre. Child’s age: ${f.get('a') || 'not shared'}. Please share details and visit timings.`
  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, '_blank')
})
$('#fPro').addEventListener('submit', (e) => {
  e.preventDefault()
  const f = new FormData(e.target)
  const body = `Hello HIGREVA,\n\nI’m ${f.get('n')} (${f.get('o') || 'independent'}). I’d like to: ${f.get('s')}.\n\n${f.get('m') || ''}`
  location.href = `mailto:${MAIL}?subject=${encodeURIComponent(`${f.get('s')} - ${f.get('n')}`)}&body=${encodeURIComponent(body)}`
})

// 3D map: tilt and rotate with pointer
const scene = $('#scene')
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
if (scene && !reduce) {
  const set = (rx, rz) => {
    scene.style.setProperty('--rx', rx + 'deg')
    scene.style.setProperty('--rz', rz + 'deg')
  }
  scene.addEventListener('pointermove', (e) => {
    const r = scene.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    set(58 - y * 16, -35 + x * 40)
  })
  scene.addEventListener('pointerleave', () => set(58, -35))
}
