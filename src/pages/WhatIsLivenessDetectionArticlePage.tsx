import { Link } from 'react-router-dom'
import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage } from '../components/ui'
import livenessDetectionFace from '../assets/images/blog-liveness-detection-face.png'

export default function WhatIsLivenessDetectionArticlePage() {
  return (
    <BlogArticleLayout
      title="How liveness detection stops fraudsters from using your photo"
      description="Someone has your photo. Can they use it to pass identity verification? With liveness detection, the answer is no. Learn how this technology tells the difference between you and a picture of you."
      date="Sep 30, 2025"
      category="Business"
      slug="what-is-liveness-detection"
    >
      <ArticleParagraph>
        Imagine someone has your photo. Maybe they found it on social media, maybe they stole your ID. Now they're trying to open a bank account in your name. They hold your picture up to their phone camera during the selfie verification step. Will it work?
      </ArticleParagraph>

      <ArticleParagraph>
        With liveness detection, it won't. This technology can tell the difference between a real person sitting in front of a camera and a photo, video, mask, or even a deepfake of that person. It's the reason identity verification actually works in a world where anyone's photo is just a few clicks away.
      </ArticleParagraph>

      <ArticleImage 
        src={livenessDetectionFace} 
        alt="Face verification screen in Folio app with checklist: good lighting, remove glasses/mask/hat, hold camera at eye level"
      />

      <ArticleH2>What fraudsters actually try</ArticleH2>

      <ArticleParagraph>
        Before understanding how liveness detection works, it helps to know what it's defending against. Fraudsters have gotten creative:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Printed photos</strong> are the simplest attack. Someone prints a high-resolution photo of your face and holds it up to the camera. It sounds obvious, but without liveness checks, many systems will accept it. The camera just sees a face.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Screen attacks</strong> are more sophisticated. Instead of printing, fraudsters display your photo or a video of you on another phone or tablet. The quality is better, and if the video shows you blinking or moving, it might fool systems that only look for basic signs of life.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Masks and dolls</strong> take physical spoofing to another level. A 3D-printed mask of your face, or even a realistic silicone mask, can potentially fool systems that only check if something face-shaped is present.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Deepfakes</strong> are the newest threat. AI can now animate a still photo of your face in real time, making it blink, smile, and turn. These synthetic videos are getting harder to distinguish from reality.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Video injection</strong> bypasses the camera entirely. Instead of showing something to the camera, attackers feed a fake video stream directly into the app. The app thinks it's receiving camera input, but it's actually receiving a pre-recorded or generated video.
      </ArticleParagraph>

      <ArticleH2>How liveness detection catches fakes</ArticleH2>

      <ArticleParagraph>
        Modern liveness detection uses multiple techniques simultaneously. No single check is perfect, but together they create a barrier that's extremely difficult to bypass.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Texture analysis</strong> examines your skin at a detailed level. Real skin has subtle variations in texture, pores, and the way it reflects light. A photo printed on paper or displayed on a screen has a different texture entirely, even if you can't see it with the naked eye. The system can.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Depth detection</strong> looks for three-dimensionality. A real face has depth: your nose sticks out, your eyes are set back. A photo is flat. Some systems use the phone's sensors to measure this depth; others analyze how shadows and light change as you move slightly.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Motion analysis</strong> watches for natural movement. Even when you try to hold still, you sway slightly, your eyes make micro-movements, your skin shifts as you breathe. These subtle, involuntary movements are hard to fake and easy to detect.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Challenge-response</strong> asks you to do something specific: turn your head left, blink twice, smile. A pre-recorded video can't respond to random prompts. This active approach catches sophisticated attacks but adds friction to the user experience.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Device integrity checks</strong> detect when something's wrong with the phone itself. Is the camera feed being intercepted? Is the app running on an emulator instead of a real device? Is the phone rooted or jailbroken in ways that enable tampering? These signals reveal injection attacks.
      </ArticleParagraph>

      <ArticleH2>Passive vs active liveness</ArticleH2>

      <ArticleParagraph>
        There are two main approaches to liveness detection, and the best systems use both.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Passive liveness</strong> works invisibly. You just take a selfie normally, and the system analyzes it for signs of spoofing. You don't have to do anything special, so verification is fast and easy. This catches most common attacks without any user friction.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Active liveness</strong> asks you to perform actions. "Turn your head to the left." "Blink." "Smile." By verifying that you respond correctly to random prompts, the system confirms you're not presenting a video or static image. This adds a few seconds but catches more sophisticated attacks.
      </ArticleParagraph>

      <ArticleParagraph>
        The combination is powerful. Passive analysis runs on every verification, catching obvious fakes instantly. When the system needs more confidence, or when the risk is higher, active challenges provide additional assurance. Most legitimate users sail through passive checks and never see an active prompt.
      </ArticleParagraph>

      <ArticleH2>What makes detection reliable</ArticleH2>

      <ArticleParagraph>
        Good liveness detection needs to work for everyone, in any conditions. That's harder than it sounds.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Lighting conditions vary wildly.</strong> Someone might verify in bright sunlight, dim room lighting, or harsh fluorescent office lights. The system needs to distinguish real faces from fakes regardless of how well-lit the scene is.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>People look different.</strong> Skin tones, facial structures, and features vary enormously across populations. Detection that works great for some demographics but poorly for others creates both security gaps and unfair user experiences. Training on diverse data is essential.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Accessories complicate things.</strong> Glasses, sunglasses, masks, hats, headscarves, headphones, beards. The system needs to handle these gracefully, asking users to remove items that interfere while accepting those that don't.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Devices vary widely.</strong> From the latest iPhones to budget Android phones, camera quality and capabilities differ dramatically. Detection needs to work reliably across all of them.
      </ArticleParagraph>

      <ArticleH2>How Folio handles liveness</ArticleH2>

      <ArticleParagraph>
        Folio's liveness detection combines passive and active methods, analyzing multiple frames rather than a single snapshot. The system checks texture, depth, motion, and device integrity simultaneously, achieving over 99% accuracy in detecting spoofing attempts.
      </ArticleParagraph>

      <ArticleParagraph>
        The detection works across iOS, Android, and web browsers, adapting to different device capabilities automatically. Clear on-screen guidance helps users position themselves correctly and achieve good lighting. When the system detects glasses, masks, or other potential obstructions, it provides specific instructions.
      </ArticleParagraph>

      <ArticleParagraph>
        For businesses, liveness detection integrates with document verification and face matching to create a complete identity verification flow. The document proves who you claim to be. The face match proves you're the person on that document. Liveness proves you're actually there, not a photo. Together, they provide strong assurance against fraud.
      </ArticleParagraph>

      <ArticleParagraph>
        As deepfake technology improves, liveness detection evolves in response. The models update continuously, learning from new attack patterns. What worked for fraudsters last month gets detected this month. It's an ongoing arms race, but one where defense consistently stays ahead. Learn more about <Link to="/platform/liveness-check" className="underline hover:text-[#737373] transition-colors">Folio's liveness check</Link>.
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
