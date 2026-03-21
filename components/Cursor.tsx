"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`;
    };

    const animate = () => {
      followerX += (mouseX - followerX - 20) * 0.12;
      followerY += (mouseY - followerY - 20) * 0.12;
      follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
      requestAnimationFrame(animate);
    };

    const onEnter = () => {
      cursor.style.transform += " scale(2)";
      follower.style.width = "60px";
      follower.style.height = "60px";
    };

    const onLeave = () => {
      follower.style.width = "40px";
      follower.style.height = "40px";
    };

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    animate();

    return () => {
      document.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  );
}
