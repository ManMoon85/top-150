// firebase-config.js — shared across all pages
export const firebaseConfig = {
  apiKey: "AIzaSyClnTEDA7hCNJPAN8RXl8MB3WBReBxYKRE",
  authDomain: "manidea-b87c3.firebaseapp.com",
  projectId: "manidea-b87c3",
  storageBucket: "manidea-b87c3.firebasestorage.app",
  messagingSenderId: "416933820616",
  appId: "1:416933820616:web:c214c0b856f6a6adbecdfd",
  measurementId: "G-HT5CZH2MDZ"
};

// Challenge configuration — update these dates to match your actual challenge
export const CHALLENGE_START = new Date("2025-06-01T00:00:00");
export const CHALLENGE_END   = new Date("2025-07-15T23:59:59");
export const PRIZE_POOL      = "₹24,050";
export const TOTAL_WINNERS   = 30;

export function getPrize(rank) {
  if (rank === 1) return "₹9,000";
  if (rank === 2) return "₹7,000";
  if (rank === 3) return "₹5,000";
  if (rank >= 4  && rank <= 20) return "₹150";
  if (rank >= 21 && rank <= 30) return "₹50";
  return "No Prize";
}

export function calcPoints(watched = 0, referrals = 0, ideas = 0) {
  return (watched * 10) + (referrals * 300) + (ideas * 100);
}

export function formatDate(ts) {
  if (!ts) return "—";
  const d = ts.toDate ? ts.toDate() : new Date(ts);
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

export function formatDateTime(ts) {
  if (!ts) return "—";
  const d = ts.toDate ? ts.toDate() : new Date(ts);
  return d.toLocaleString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
}

export function getCountdown(endDate) {
  const diff = endDate - new Date();
  if (diff <= 0) return "Challenge Ended";
  const days = Math.floor(diff / 86400000);
  const hrs  = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  return `${days}d ${hrs}h ${mins}m`;
}

export function avatarUrl(name, bg = "1e3048", color = "f5c518") {
  return `https://ui-avatars.com/api/?background=${bg}&color=${color}&name=${encodeURIComponent(name || "U")}&size=64`;
}
