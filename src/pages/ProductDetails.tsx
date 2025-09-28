// src/pages/ProductDetails.tsx
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import fBike from '@/assets/final_bike1.png';
import fBike1 from '@/assets/bajaj.jpeg';
import fBike2 from '@/assets/ather.jpeg';
import fBike3 from '@/assets/tvs.jpeg';
import fBike4 from '@/assets/bajj.jpeg';
import fBike5 from '@/assets/hero.jpeg';
import { Button } from "../components/ui/button";

/**
 * NOTE: This file preserves your product list and original structure,
 * but changes the Compare action so it:
 *  - stores product ids in localStorage under "compareList"
 *  - navigates client-side to /compare (no full reload -> no 404)
 */

const allProducts = [
  { id: 1, name: "Honda Activa 6G", brand: "Honda", price: 75000, mileage: 60, engine: "109.51 cc", fuelType: "Petrol", location: "Mumbai", dealer: "Honda Showroom Central", image: fBike },
  { id: 2, name: "Royal Enfield Classic 350", brand: "Royal Enfield", price: 195000, mileage: 40, engine: "349 cc", fuelType: "Petrol", location: "Delhi", dealer: "Royal Enfield Store", image: fBike1},
  { id: 3, name: "Ather 450X", brand: "Ather", price: 140000, mileage: 85, engine: "Electric", fuelType: "Electric", location: "Bangalore", dealer: "Ather Space", image: fBike2 },
  { id: 4, name: "TVS Apache RTR 160", brand: "TVS", price: 115000, mileage: 45, engine: "159.7 cc", fuelType: "Petrol", location: "Chennai", dealer: "TVS Dealership", image: fBike3 },
  { id: 5, name: "Bajaj Pulsar 220F", brand: "Bajaj", price: 85000, mileage: 35, engine: "220 cc", fuelType: "Petrol", location: "Pune", dealer: "Certified Pre-owned", image: fBike4 },
  { id: 6, name: "Hero Splendor Plus", brand: "Hero", price: 70000, mileage: 65, engine: "97.2 cc", fuelType: "Petrol", location: "Gurgaon", dealer: "Hero MotoCorp", image: fBike5 }
];

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = allProducts.find((p) => p.id === Number(id));
  const [verifiedIds, setVerifiedIds] = useState<number[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("verifiedProducts");
      const arr: number[] = raw ? JSON.parse(raw) : [];
      setVerifiedIds(Array.isArray(arr) ? arr : []);
    } catch {
      setVerifiedIds([]);
    }
  }, []);

  useEffect(() => {
    if (!product) return;

    const container = document.querySelector(".max-w-4xl");
    if (!container) return;
    const candidates = Array.from(container.querySelectorAll("button, a, [role='button'], div, span"));

    const findByText = (text: string) => {
      const t = text.trim().toLowerCase();
      return candidates.find((el) => {
        const content = (el.textContent || "").trim().toLowerCase();
        return content === t;
      }) as HTMLElement | undefined;
    };

    const onVerify = (ev?: Event) => {
      ev?.preventDefault?.();
      const ok = window.confirm(`Do you want to verify "${product.name}" as inspected?`);
      if (!ok) return;
      try {
        const raw = localStorage.getItem("verifiedProducts");
        const arr: number[] = raw ? JSON.parse(raw) : [];
        if (!arr.includes(product.id)) {
          arr.push(product.id);
          localStorage.setItem("verifiedProducts", JSON.stringify(arr));
          setVerifiedIds(arr);
        } else {
          window.alert(`${product.name} is already verified.`);
        }
      } catch (e) {
        window.alert(`${product.name} verified (couldn't persist).`);
      }
    };

    const onCompare = (ev?: Event) => {
      ev?.preventDefault?.();
      try {
        const raw = localStorage.getItem("compareList");
        const arr: number[] = raw ? JSON.parse(raw) : [];
        // Ensure unique, keep newest at end
        if (!arr.includes(product.id)) arr.push(product.id);
        // Optionally limit compare to 4 items (common UX) — adjust as you like
        const limited = arr.slice(-4);
        localStorage.setItem("compareList", JSON.stringify(limited));
      } catch {
        // fallback: overwrite
        localStorage.setItem("compareList", JSON.stringify([product.id]));
      }
      // Navigate client-side to Compare page (avoid 404)
      navigate("/compare");
    };

    const onContact = (ev?: Event) => {
      ev?.preventDefault?.();
      const dealerEmail = "dealer@example.com";
      const subject = encodeURIComponent(`Enquiry about ${product.name}`);
      const body = encodeURIComponent(`Hi,\n\nI am interested in the ${product.name} (${product.brand}) listed at ${product.dealer} in ${product.location}.\n\nPlease share availability and next steps for a test ride.\n\nThanks,\n`);
      window.location.href = `mailto:${dealerEmail}?subject=${subject}&body=${body}`;
    };

    const verifyEl = findByText("Verify");
    const compareEl = findByText("Compare");
    const contactEl = findByText("Contact Dealer");

    if (verifyEl) verifyEl.addEventListener("click", onVerify);
    if (compareEl) compareEl.addEventListener("click", onCompare);
    if (contactEl) contactEl.addEventListener("click", onContact);

    const delegated = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const txt = (target.textContent || "").trim().toLowerCase();
      if (txt === "verify") onVerify(e);
      if (txt === "compare") onCompare(e);
      if (txt === "contact dealer") onContact(e);
    };
    container.addEventListener("click", delegated);

    return () => {
      if (verifyEl) verifyEl.removeEventListener("click", onVerify);
      if (compareEl) compareEl.removeEventListener("click", onCompare);
      if (contactEl) contactEl.removeEventListener("click", onContact);
      container.removeEventListener("click", delegated);
    };
  }, [product, navigate]);

  if (!product) {
    return <div className="p-6">Product not found</div>;
  }

  const isVerified = verifiedIds.includes(product.id);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link to="/">
        <Button variant="outline" className="mb-4">← Back to Products</Button>
      </Link>

      <div className="flex items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        {isVerified && (
          <span className="text-green-600 font-semibold">Verified ✓</span>
        )}
      </div>

      <p className="text-gray-600 mb-4">{product.dealer}, {product.location}</p>

      {/* Image */}
      <img src={product.image} alt={product.name} className="w-full h-80 object-contain mb-4" />

      {/* Details */}
      <div className="grid grid-cols-2 gap-4 text-sm mb-4">
        <p><strong>Price:</strong> ₹{product.price.toLocaleString()}</p>
        <p><strong>Mileage:</strong> {product.mileage} km/l</p>
        <p><strong>Engine:</strong> {product.engine}</p>
        <p><strong>Fuel:</strong> {product.fuelType}</p>
      </div>
      <div className="relative max-h-[90px]"></div>
      {/* Buttons */}
      
      <div className="absolute bottom-70 left-1/2 transform -translate-x-1/2 flex gap-3">
        <Button variant="hero">Verify</Button>
        <Button variant="hero">Compare</Button>
        <Button variant="hero">Contact Dealer</Button>
      </div>
    </div>
  );
}
