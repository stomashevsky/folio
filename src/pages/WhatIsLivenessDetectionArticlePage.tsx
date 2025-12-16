import { BlogArticleLayout, ArticleH2, ArticleParagraph } from '../components/ui'

export default function WhatIsLivenessDetectionArticlePage() {
  return (
    <BlogArticleLayout
      title="What is liveness detection and how does it prevent fraud?"
      description="Liveness detection ensures the person verifying their identity is physically present and real. Learn how this technology works, what attacks it prevents, and why it's essential for secure identity verification."
      date="Sep 30, 2025"
      category="Product"
      slug="what-is-liveness-detection"
    >
      <ArticleParagraph>
        Identity fraud has evolved far beyond stolen passwords and forged documents. Today, fraudsters use high-resolution photos, pre-recorded videos, and even sophisticated deepfakes to impersonate real people during identity verification. <strong>Liveness detection</strong> is the technology designed to stop these attacks by confirming that the person in front of the camera is physically present, alive, and not a spoofed representation.
      </ArticleParagraph>

      <ArticleParagraph>
        For businesses running digital onboarding, remote account opening, or any identity verification process, liveness detection has become a critical layer of defense. Without it, even the most accurate face matching system can be fooled by a printed photo or a video played on a screen.
      </ArticleParagraph>

      <ArticleH2>How liveness detection works</ArticleH2>

      <ArticleParagraph>
        At its core, liveness detection analyzes visual and behavioral signals to distinguish a real, live person from a fake representation. Modern systems combine multiple approaches to achieve this.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Passive liveness detection</strong> works silently in the background. As a user takes a selfie, the system analyzes subtle cues like skin texture, light reflection patterns, depth information, and micro-movements that are nearly impossible to replicate with a static image or video. The user doesn't need to perform any special actions, making the experience fast and frictionless.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Active liveness detection</strong> asks users to perform specific actions: blink, turn their head, smile, or follow a moving object on the screen. By verifying that the person responds correctly to random prompts, the system can confirm they're not presenting a pre-recorded video or a static image.
      </ArticleParagraph>

      <ArticleParagraph>
        The most secure implementations combine both approaches, using passive analysis as the primary check and active challenges when additional assurance is needed. This layered approach balances security with user experience.
      </ArticleParagraph>

      <ArticleH2>Types of attacks liveness detection prevents</ArticleH2>

      <ArticleParagraph>
        Understanding what liveness detection protects against helps explain why it's so important:
      </ArticleParagraph>

      <ul className="block font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full space-y-2 pl-6 list-disc">
        <li><strong>Print attacks</strong>: Fraudsters hold up a printed photo of the victim in front of the camera. Basic but surprisingly effective against systems without liveness checks.</li>
        <li><strong>Screen replay attacks</strong>: A video or photo displayed on a phone, tablet, or monitor. More sophisticated than print attacks because the image quality is often better.</li>
        <li><strong>3D mask attacks</strong>: Custom-made masks designed to mimic facial features. These can fool basic systems that only check for face presence.</li>
        <li><strong>Deepfake attacks</strong>: AI-generated videos that animate a victim's face in real time. These represent the cutting edge of fraud techniques and require advanced detection methods.</li>
        <li><strong>Injection attacks</strong>: Fraudsters bypass the camera entirely by injecting fake video feeds directly into the verification stream. This requires detecting compromised devices and manipulated data streams.</li>
      </ul>

      <ArticleH2>Why liveness detection matters for businesses</ArticleH2>

      <ArticleParagraph>
        The business case for liveness detection is straightforward: without it, facial verification becomes a liability rather than a security measure. A fraudster who obtains someone's ID document and photo can potentially open accounts, apply for credit, or access services in that person's name.
      </ArticleParagraph>

      <ArticleParagraph>
        Regulatory requirements increasingly mandate liveness checks. Financial institutions, cryptocurrency exchanges, and online gambling platforms face strict KYC (Know Your Customer) requirements that effectively require proving the person submitting identity documents is the actual document holder. Liveness detection provides this proof.
      </ArticleParagraph>

      <ArticleParagraph>
        Beyond compliance, liveness detection protects brand reputation. A single high-profile fraud case can damage customer trust and invite regulatory scrutiny. Prevention is far less costly than remediation.
      </ArticleParagraph>

      <ArticleH2>Key features to look for</ArticleH2>

      <ArticleParagraph>
        Not all liveness detection solutions are created equal. When evaluating options, consider these factors:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Certification and standards compliance</strong>: Look for solutions that meet ISO 30107-3 standards for presentation attack detection. In Europe, compliance with the CEN TS 18099-2024 guidance for injection attack detection provides additional assurance.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Multi-frame analysis</strong>: Systems that analyze multiple frames rather than a single snapshot can detect more subtle spoofing attempts and reduce false positives.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Device integrity checks</strong>: The best solutions detect compromised devices, emulators, and rooted phones that attackers use for injection attacks.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Fairness across demographics</strong>: Liveness detection must work consistently across different skin tones, lighting conditions, and device types. Solutions trained on diverse datasets perform more equitably.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>User experience</strong>: The fastest and most accurate liveness check is worthless if users abandon the process. Look for solutions with clear guidance, fast processing, and minimal friction.
      </ArticleParagraph>

      <ArticleH2>How Folio approaches liveness detection</ArticleH2>

      <ArticleParagraph>
        Folio's liveness check combines passive and active signals to verify that users are physically present during identity verification. The system gathers signals from both the selfie capture and the device itself, analyzing them together to detect inconsistencies that indicate spoofing attempts.
      </ArticleParagraph>

      <ArticleParagraph>
        The platform follows EU-aligned guidance for injection attack detection, uses continuously updated models that improve over time, and provides clear user guidance to help people capture accurate selfies. Flexible controls let businesses adjust quality thresholds and retry rules based on their specific compliance and risk requirements.
      </ArticleParagraph>

      <ArticleParagraph>
        For businesses building identity verification workflows, liveness detection integrates seamlessly with document verification and face matching to create a complete verification chain. The result is high assurance that the person completing verification is who they claim to be.
      </ArticleParagraph>

      <ArticleH2>The future of liveness detection</ArticleH2>

      <ArticleParagraph>
        As deepfake technology advances, liveness detection must evolve in response. The industry is moving toward continuous improvement models where detection systems learn from new attack patterns in real time. Hardware-based signals from device sensors add additional layers of verification that are difficult for attackers to spoof.
      </ArticleParagraph>

      <ArticleParagraph>
        For now, liveness detection represents one of the most effective defenses against identity fraud in digital verification. Combined with document authentication and face matching, it creates a robust verification process that balances security with user experience. As remote identity verification becomes more prevalent across industries, liveness detection will remain an essential component of trustworthy digital identity systems.
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
