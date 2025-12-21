import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage, HowToSchema } from '../components/ui'
import { LocalizedLink } from '../components/ui'
import shareTravelImage from '../assets/images/blog-share-travel-folio.png'

export default function HowToShareTravelPlansArticlePage() {
  return (
    <BlogArticleLayout
      title="Your friend booked the hotel. Now they're stuck in traffic. Do you have the confirmation?"
      description="Group trips fall apart when one person has all the bookings. Here's how to make sure everyone has access to everything."
      date="Jul 18, 2025"
      category="Product"
      slug="how-to-share-your-travel-plans-with-friends-using-a-trip-planner-app"
    >
      <HowToSchema
        name="How to share travel plans with friends using Folio"
        description="Step-by-step guide to sharing trip bookings and travel documents with friends and family using shared folders in Folio."
        totalTime="PT10M"
        steps={[
          { name: "Download Folio app", text: "Install Folio Wallet from the App Store or Google Play Store on your phone." },
          { name: "Create a shared folder", text: "Open Folio and create a new folder for your trip. Give it a descriptive name like 'Barcelona Trip 2025'." },
          { name: "Invite travel companions", text: "Tap the share button and invite your friends and family by sending them an invitation link." },
          { name: "Add your bookings", text: "Import bookings by forwarding confirmation emails to your Folio address, uploading PDFs, or photographing printouts." },
          { name: "Let others add their bookings", text: "Anyone in the shared folder can add their own bookings. All documents appear in a shared timeline visible to everyone." },
          { name: "Access documents during the trip", text: "During your trip, anyone can show any document at check-in, train stations, or venues. No need to wait for the person who booked." },
        ]}
      />
      <ArticleParagraph>
        You're standing at the hotel front desk. Your friend booked the room, but their flight was delayed. The receptionist is asking for the confirmation number. You check your messages: nothing. You search your email: nothing. The booking is in your friend's inbox, on a phone that's currently somewhere over the Atlantic.
      </ArticleParagraph>

      <ArticleParagraph>
        This is the single point of failure problem. Group trips spread information across multiple people's inboxes. When the person with the booking isn't there, everyone else is stuck.
      </ArticleParagraph>

      <ArticleH2>Why forwarding doesn't work</ArticleH2>

      <ArticleParagraph>
        The obvious solution is forwarding emails. Someone books the hotel, forwards the confirmation to everyone. Someone else books train tickets, forwards those too. In theory, everyone has everything.
      </ArticleParagraph>

      <ArticleParagraph>
        In practice, it falls apart. The forwarded email gets buried under 50 other messages. Someone's phone is on airplane mode and the attachment won't load. The person who needs the confirmation is scrolling through a group chat trying to find a screenshot from three weeks ago. Updates don't sync. Someone changed the reservation but forgot to forward the new confirmation.
      </ArticleParagraph>

      <ArticleH2>Shared folders: everyone has everything</ArticleH2>

      <ArticleParagraph>
        The real solution is shared access to documents, not copies of documents. When you add a hotel booking to a shared folder, everyone with access sees it immediately. Not a forwarded copy that might be outdated, but the actual document you're looking at.
      </ArticleParagraph>

      <ArticleParagraph>
        <LocalizedLink to="/#get-the-app" className="underline hover:text-[#737373] transition-colors">Folio</LocalizedLink> works this way. Create a folder for your trip. Import your bookings: forward the confirmation email, upload the PDF, photograph the printout. Invite your travel companions. Now everyone sees the same timeline with the same documents.
      </ArticleParagraph>

      <ArticleImage
        src={shareTravelImage}
        alt="Folio app showing import options, shared trip timeline with hotel, flights, and activities, and train ticket details for two passengers"
      />

      <ArticleParagraph>
        The flight shows both travelers tagged. The train ticket shows seats for two people. The hotel confirmation is visible to everyone in the folder. When you're at the front desk and your friend is delayed, you pull up the same confirmation they would show. No searching. No "can you screenshot that?"
      </ArticleParagraph>

      <ArticleH2>How it works in practice</ArticleH2>

      <ArticleParagraph>
        Before your trip: one person creates a shared folder and invites the others. As bookings come in, anyone can add them. Forward the confirmation email to your Folio address, or upload the PDF directly. The app extracts dates, times, confirmation numbers, and builds a timeline.
      </ArticleParagraph>

      <ArticleParagraph>
        During your trip: anyone can show any document. At the train station, either person can pull up the tickets with the QR code. At the museum, anyone has the entrance tickets. If plans change and someone adds a new restaurant reservation, it appears for everyone immediately.
      </ArticleParagraph>

      <ArticleParagraph>
        The practical difference: the person who booked doesn't need to be present. If one friend is running late, the others check in to the hotel. If someone's phone dies, the other person has the train tickets. No one is the single point of failure anymore.
      </ArticleParagraph>

      <ArticleParagraph>
        Group trips work better when everyone has access to everything. Not screenshots that get lost, not forwarded emails that get buried, but shared documents that stay current. Less "can you send me that again?" More actually enjoying the trip together.
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
