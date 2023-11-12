import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-app-dark flex items-center justify-between p-4 shadow-md animate-rotate45">
      <div className="center gap-4">
        <Link href="https://www.facebook.com/profile.php?id=100010017554704" className="center gap-2">
          <Image src="https://img.icons8.com/color/30/facebook-new.png" width="30" height="30" alt="facebook" />
          <span>Facebook</span>
        </Link>
        <Link href="https://www.instagram.com/imadbouderoua/" className="center gap-2">
          <Image src="https://img.icons8.com/fluency/30/instagram-new.png" width="30" height="30" alt="instagram" />
          <span>Instagram</span>
        </Link>
        <Link href="https://www.linkedin.com/feed/" className="center gap-2">
          <Image src="https://img.icons8.com/color/48/linkedin.png" width="30" height="30" alt="shopify" />
          <span>Linkdeen</span>
        </Link>
      </div>
      <div className="grid-cols-3">
        <span className=" opacity-50">Phone : +212-620783344</span>
      </div>
    </div>
  );
}
