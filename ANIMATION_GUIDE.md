# HIGREVA PRESCHOOLS - Animation Usage Guide

## How to Use Animations in Your Components

### 1. **Basic AOS Implementation**

To add animations to any element, use the `data-aos` attribute:

```jsx
<div data-aos="fade-up">
  Content here
</div>
```

### 2. **Available AOS Animations**

```jsx
// Fade animations
<div data-aos="fade-up">Fade in while moving up</div>
<div data-aos="fade-down">Fade in while moving down</div>

// Slide animations
<div data-aos="slide-left">Slide in from left</div>
<div data-aos="slide-right">Slide in from right</div>

// Zoom animation
<div data-aos="zoom-in">Scale up while fading in</div>
```

### 3. **Adding Animation Delays**

Stagger animations for visual effect:

```jsx
{items.map((item, idx) => (
  <div key={idx} data-aos="fade-up" data-aos-delay={idx * 50}>
    {item}
  </div>
))}
```

Delay increments: 50ms, 100ms, 150ms, 200ms, etc.

### 4. **Animation Configuration**

Current settings (in `src/main.jsx`):
```javascript
AOS.init({
  duration: 800,        // Animation duration in ms
  easing: 'ease-in-out', // Easing function
  once: true,           // Animate only once
  offset: 100,          // Trigger 100px before element
})
```

### 5. **Custom Animations with CSS**

All keyframe animations are in `src/index.css`:

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### 6. **Hover Animations**

Hover effects are built into component styles using cubic-bezier:

```css
.card {
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(59,79,217,0.15);
}
```

### 7. **Component Animation Patterns**

#### **Section Heading**
```jsx
<div className="sec_head text-center mb-4" data-aos="fade-down">
  <h2>Section Title</h2>
  <p>Subtitle</p>
</div>
```

#### **Grid Items (Staggered)**
```jsx
{items.map((item, idx) => (
  <div key={idx} data-aos="fade-up" data-aos-delay={idx * 50}>
    {item}
  </div>
))}
```

#### **Cards with Hover**
```jsx
<div className="card-element">
  <div className="card-image">
    <img />
  </div>
  <div className="card-content">
    Content
  </div>
</div>

// CSS
.card-element {
  transition: all 0.4s ease;
}
.card-element:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.1);
}
```

### 8. **Icon Animations**

```jsx
<i className="icon" data-aos="fade-up">Icon</i>

// CSS for rotating icons
.icon-accent {
  transition: all 0.3s ease;
}
.card:hover .icon-accent {
  transform: rotate(10deg);
  color: #ffb81c;
}
```

### 9. **Common Timing Values**

| Duration | Use Case |
|----------|----------|
| 200ms | Quick, snappy feedback |
| 300ms | Standard hover effects |
| 400ms | Card movements, transforms |
| 600ms | Scroll-based animations |
| 800ms | Page entrance animations |
| 2000ms | Infinite/pulse animations |

### 10. **Animation Performance Tips**

✅ **Use GPU-accelerated properties:**
- `transform: translateY()`, `scale()`, `rotate()`
- `opacity`

❌ **Avoid animating:**
- `width`, `height`
- `top`, `left`, `margin`
- `padding`

### 11. **Disabled Animations (for Testing)**

To disable all animations temporarily for debugging:

```css
* {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
}
```

### 12. **Mobile Optimization**

Animations automatically work on mobile but can be reduced:

```css
@media (max-width: 768px) {
  [data-aos] {
    animation-duration: 400ms;
  }
}
```

### 13. **Adding New Animations**

To add a custom animation:

1. **Define keyframes** in `src/index.css`:
```css
@keyframes customPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

2. **Add data-aos attribute** to element:
```jsx
<div data-aos="custom-pulse">Element</div>
```

3. **Add CSS rule** for the animation:
```css
[data-aos="custom-pulse"] {
  animation: customPulse 1.5s ease-in-out infinite;
}
```

---

## Real-World Examples

### Example 1: Feature List with Staggered Animation
```jsx
{features.map((feature, idx) => (
  <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
    <h4>{feature.title}</h4>
    <p>{feature.description}</p>
  </div>
))}
```

### Example 2: Card Grid with Hover Effect
```jsx
<div className="card-grid">
  {items.map((item) => (
    <div className="card" key={item.id}>
      <div className="card-image">
        <img src={item.image} />
      </div>
      <div className="card-body">
        {item.content}
      </div>
    </div>
  ))}
</div>

/* CSS */
.card {
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(59,79,217,0.15);
}
.card-image {
  overflow: hidden;
  border-radius: 12px;
}
.card-image img {
  transition: transform 0.4s ease;
}
.card:hover .card-image img {
  transform: scale(1.08);
}
```

### Example 3: Button with Feedback Animation
```jsx
<button className="btn-primary" data-aos="fade-up" data-aos-delay="200">
  Click Me
</button>

/* CSS */
.btn-primary {
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(59,79,217,0.3);
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(59,79,217,0.5);
}
```

---

## Troubleshooting

### Animation Not Playing?
- ✅ Check if `data-aos` attribute is present
- ✅ Verify element enters viewport
- ✅ Check console for errors
- ✅ Ensure AOS is initialized in main.jsx

### Animation Too Fast/Slow?
- Modify `duration` in `AOS.init()`
- Or add `data-aos-duration="1000"` to specific element

### Animation Triggers Too Early?
- Increase `offset` value in `AOS.init()`
- Or add `data-aos-offset="150"` to element

### Animation Repeats?
- AOS has `once: true` by default
- To repeat animations: add `data-aos-once="false"`

---

## Browser DevTools Tips

**Chrome/Edge DevTools:**
1. Open DevTools (F12)
2. Go to Rendering tab
3. Check "Paint flashing" to see what's animating
4. Use Performance tab to check animation performance

**Firefox DevTools:**
1. Open Inspector (F12)
2. Click animation icon next to element
3. Slow down animations using playback speed
4. Inspect computed styles for transitions

---

**For more information, visit:** [AOS Documentation](https://michalsnik.github.io/aos/)
