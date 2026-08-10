'use client'

import { useEffect, useRef } from 'react'

/**
 * PicTimeGallery — embeds a Pic-Time blog slideshow.
 *
 * Pic-Time's embed is a <template data-pt-slideshowid> placeholder plus an
 * external script that finds the template and injects the slideshow. Scripts
 * added via dangerouslySetInnerHTML never execute, so we render the template
 * and append the script element ourselves after mount.
 *
 * Frontmatter on a post:
 *   picTimeId: "6662914c0980e50a78c9cebb"   (the slideshow id)
 *   picTimeGallery: "-fadulsfamilyshoot"     (the gallery url segment)
 */
export default function PicTimeGallery({ id, gallery }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!id || !gallery || !el) return
    if (el.querySelector('script[data-pt-scriptslideshowid]')) return // already loaded
    const s = document.createElement('script')
    s.type = 'text/javascript'
    s.async = true
    s.src = `https://transcendphoto.pic-time.com/${gallery}/slideswebcomponentembed.js/${id}?features=lightbox,pinterest&filtertags=`
    s.setAttribute('data-pt-scriptslideshowid', id)
    el.appendChild(s)
  }, [id, gallery])

  if (!id || !gallery) return null

  return (
    <div className="pictime-embed" ref={ref} style={{ margin: '40px 0' }}>
      <template data-pt-type="blog" data-pt-slideshowid={id} />
    </div>
  )
}
