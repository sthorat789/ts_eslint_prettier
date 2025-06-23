// Should show ESLint error
// Simple math operations
export function add(a: number, b: number): number {
  return a + b;
}

// Main function for demonstration
function main(): void {
  console.log('🧮 Math Operations Demo:');
  console.log(`Add: 5 + 3 = ${add(5, 3)}`);
}

// Run demo if this file is executed directly (CommonJS way)
if (require.main === module) {
  main();
}
