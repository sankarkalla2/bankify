"use client";

import React from "react";
import CountUp from "react-countup";

interface AnimatedCounterProps {
  amount: number;
}
const AnimatedCounter = ({ amount }: AnimatedCounterProps) => {
  return <CountUp end={amount} duration={2.75} decimals={2} prefix="$"/>;
};

export default AnimatedCounter;
