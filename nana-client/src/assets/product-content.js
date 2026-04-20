import toteImg from "./img/nu-tote.jpg";
import panyo from "./img/handkerchief.png";
import jug from "./img/jugppl.png";
import boxers from "./img/nu_boxers.png";
import varjack from "./img/varjack.png";
import deskorg from "./img/deskorg.jpg";
import lanyard from "./img/lanyard.jpg";
import usb from "./img/flash.jpg";
import mouse from "./img/mouse.jpg";
import kc from "./img/keychain.jpg";
import spike from "./img/spike.png";

const products = [
  {
    name: "campus-tote-bag",
    title: "Campus Tote Bag",
    category: "Accesories",
    price: "PHP 499",
    stock: "In stock",
    image: toteImg,
    content: [
      "A roomy everyday tote for books, gym clothes, chargers, and quick campus errands.",
      "Made with thick canvas, reinforced handles, and a clean monochrome print.",
      "Best for students who want one simple carry-all bag for class and after-class plans.",
    ],
  },
  {
    name: "handeker-chief",
    title: "NU Handkerchief",
    category: "Accesories",
    price: "PHP 150",
    stock: "In stock",
    image: panyo,
    content: [
      "Silk sewn with gold laces and embroided brandings",
      "Perfect for accesorising or for practical use like wiping.",
      "Goes well with all university apparel, highlights blue theme",
    ],
  },
  {
    name: "stainless-tumbler",
    title: "Stainless Tumbler",
    category: "Collectible",
    price: "PHP 599",
    stock: "Low stock",
    image: jug,
    content: [
      "A double-wall tumbler built for water, coffee, or tea during long school days.",
      "The matte finish keeps the look simple while the lid helps reduce spills in your bag.",
      "Fits most side pockets and keeps drinks ready between classes.",
    ],
  },
  {
    name: "boxers",
    title: "NU Boxers",
    category: "Apparel",
    price: "PHP 350",
    stock: "In stock",
    image: boxers,
    content: [
      "Stretchable and breathable boxers, made for maximum comfort no matter what occasion.",
      "Developed in partnership with Adidas, these undergarments use the same technology for Adidas jerseys",
      "Feel ready for anything with the NU boxers, comes in 3 colors.",
    ],
  },
  {
    name: "varsity-jacket",
    title: "Varsity Jacket",
    category: "Apparel",
    price: "PHP 1,199",
    stock: "Preorder",
    image: varjack,
    content: [
      "A soft everyday jacket with a relaxed fit for classrooms, commute days, and weekends.",
      "The heavy cotton blend keeps structure while staying comfortable for regular wear.",
      "Available through preorder so sizes can be reserved before release.",
    ],
  },
  {
    name: "mouse",
    title: "Collaboration Gaming Mouse",
    category: "Tech",
    price: "PHP 749",
    stock: "In stock",
    image: mouse,
    content: [
      "A dual-connect mouse built for both gaming and productivity.",
      "Can range from 400 to 1800 DPI with a quick action button or through its free software.",
      "Includes glass and plastic glide stickers for smooth handling on any surface.",
    ],
  },
  {
    name: "desk-organizer-kit",
    title: "Desk Organizer Kit",
    category: "Workspace",
    price: "PHP 349",
    stock: "In stock",
    image: deskorg,
    content: [
      "A small organizer set for pens, clips, cables, cards, and other desk essentials.",
      "The modular pieces can be arranged based on your study area or dorm table.",
      "Keeps daily tools visible without adding clutter.",
    ],
  },
  {
    name: "key-chain",
    title: "NU Keychain",
    category: "Collectible",
    price: "PHP 149",
    stock: "In stock",
    image: kc,
    content: [
      "High quality rubber keychain themed with Nationalian pride.",
      "Includes strong stainless chain for clipping to any accesory.",
      "Comes in traditional NU colors or black and white, very limited stock",
    ],
  },
  {
    name: "id-lanyard-set",
    title: "ID Lanyard Set",
    category: "Accessories",
    price: "PHP 179",
    stock: "In stock",
    image: lanyard,
    content: [
      "A durable lanyard and card holder set for IDs, access cards, and small passes.",
      "The clip is easy to detach when scanning or presenting credentials.",
      "Simple enough for daily use and sturdy enough for a full semester.",
    ],
  },
  {
    name: "thumb-drive",
    title: "Dual Connect Thumb Drive",
    category: "Tech",
    price: "PHP 499",
    stock: "In stock",
    image: usb,
    content: [
      "A compact dual-connect thumb drive designed for quick file transfers between phones, tablets, and laptops.",
      "Features both USB-A and USB-C connectors so you can move documents, photos, and videos without needing adapters.",
      "Perfect for students who need a reliable way to store lectures, projects, and files across multiple devices.",
    ],
  },
  {
    name: "dog-plush",
    title: "Spike Plushie",
    category: "Collectible",
    price: "PHP 399",
    stock: "In stock",
    image: spike,
    content: [
      "A soft bulldog mascot plushie designed to represent school pride in a fun and collectible form.",
      "Made with comfortable fabric and detailed stitching, making it great for display, gifts, or everyday use.",
      "Perfect for students and fans who want a small reminder of campus spirit on their desk, bag, or dorm space.",
    ],
  },
];

export default products;
