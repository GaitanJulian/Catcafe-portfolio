'use client'

const tea = '\u{1F375}'
const catSmiling = '\u{1F63A}'
const catWink = '\u{1F63C}'
const catGrin = '\u{1F638}'
const chair = '\u{1FA91}'
const paw = '\u{1F43E}'

const emojiFont = '"Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", "EmojiOne Color", sans-serif'

export default function FloatingDecorations() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0, fontFamily: emojiFont }}
    >
      {/* Floating coffee cups */}
      <div className="absolute top-10 left-20 text-4xl animate-float opacity-50 animate-bloom">{tea}</div>
      <div className="absolute bottom-32 right-24 text-3xl animate-float-reverse opacity-40 animate-bloom">{tea}</div>
      <div
        className="absolute top-1/2 left-1/3 text-2xl animate-float opacity-30 animate-bloom"
        style={{ animationDelay: '1s' }}
      >
        {tea}
      </div>

      {/* Floating cat faces */}
      <div className="absolute top-1/3 right-10 text-5xl animate-float-reverse opacity-60 animate-bloom">{catSmiling}</div>
      <div
        className="absolute bottom-1/4 left-10 text-4xl animate-float opacity-50 animate-bloom"
        style={{ animationDelay: '0.5s' }}
      >
        {catWink}
      </div>
      <div
        className="absolute top-2/3 right-1/3 text-3xl animate-float opacity-35 animate-bloom"
        style={{ animationDelay: '1.5s' }}
      >
        {catGrin}
      </div>

      {/* Floating chairs */}
      <div className="absolute top-20 right-1/3 text-3xl animate-tilt opacity-35 animate-bloom">{chair}</div>
      <div
        className="absolute bottom-40 right-1/4 text-2xl animate-float-reverse opacity-30 animate-bloom"
        style={{ animationDelay: '0.8s' }}
      >
        {chair}
      </div>

      {/* Paw prints */}
      <div className="absolute top-1/4 left-1/2 text-2xl animate-float opacity-25 animate-bloom">{paw}</div>
      <div
        className="absolute bottom-1/3 right-1/2 text-2xl animate-float opacity-25 animate-bloom"
        style={{ animationDelay: '1.2s' }}
      >
        {paw}
      </div>

      {/* Ambient background glows */}
      <div
        className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full opacity-30 pointer-events-none blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(255, 165, 0, 0.4) 0%, transparent 70%)'
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-20 pointer-events-none blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(247, 212, 196, 0.3) 0%, transparent 70%)'
        }}
      />
    </div>
  )
}
