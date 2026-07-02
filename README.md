# wax-nft-wash-trading-pattern-flag

**NFT Wash Trading Pattern Flag**

An interactive flow tracking system that signals whenever specific asset identifiers cycle repeatedly between a tight circle of interconnected wallet addresses on WAX. Helps identify potential wash trading loops and manipulation patterns in NFT collections.

**Status:** 🔒 Private (In Development) | Target: Public when v1 complete  
**Category:** AtomicAssets & Marketplace Intelligence Engine  
**Parent Catalog:** [pixel-journey/wax-ecosystem-blueprint-catalog](https://github.com/pixel-journey/wax-ecosystem-blueprint-catalog)

> Built to the same high standard of educational excellence, production readiness, and WAX best practices as the [gkniftyheads-tracker](https://github.com/henrikpiga/gkniftyheads-tracker).

---

## Quick Start

```bash
git clone https://github.com/pixel-journey/wax-nft-wash-trading-pattern-flag.git
cd wax-nft-wash-trading-pattern-flag
npm install
npm run dev
```

Select a collection or enter asset IDs in the demo to instantly see flagged wash trading cycles and flow visualizations.

---

## Why This Blueprint?

Wash trading artificially inflates volume and floor prices in NFT collections. This tool makes those hidden cycles visible by tracking asset movements between interconnected wallets, helping projects, collectors, and marketplaces detect manipulation.

---

## Architecture & Data Flow

```
Select Collection or Asset IDs
       ↓
Fetch Transfer History (AtomicAssets + Hyperion)
       ↓
Build Asset Flow Graph
  - Nodes = wallets
  - Edges = transfers of specific assets
       ↓
Detect Cycles & Tight Clusters
       ↓
Interactive Flow Visualization
  - Highlighted wash loops
  - Wallet cluster analysis
  - Timeline of suspicious activity
```

All graph building and detection is client-side.

---

## Complete Repository Structure

Follows Pixel Journey high standards.

Key parts:
- `app/` — Main flow interface
- `components/` — FlowGraph, CycleHighlighter, ClusterTable, TimelineView
- `hooks/` — useAssetFlow, useWashDetection
- `lib/wax/` — transfer-graph-builder.ts, cycle-detector.ts, atomic-history.ts
- `public/mock-data/` — Sample collections with known wash patterns
- `.github/workflows/` — CI automation

Detailed comments on graph algorithms and cycle detection logic.

---

## Key WAX Concepts Explained

- **AtomicAssets Transfer History**: Tracking individual asset movements between wallets.
- **Cycle Detection in Graphs**: Identifying repeated paths that indicate wash trading loops.
- **Hyperion for Asset Flows**: Efficiently pulling the detailed transfer data needed for this analysis.
- **Wash Trading Indicators**: Common patterns like rapid back-and-forth between small groups of wallets.

This is **WAX-primary** (AtomicAssets) but the flow visualization and cycle detection pattern is portable to other chains with similar asset transfer data.

---

## Design Specifications

- Clean, modern graph visualization with highlighted cycles
- Interactive nodes and edges with detailed transfer info
- Clear timeline of suspicious activity
- Responsive design
- Accessible controls and color-blind friendly highlights

Aligned with Pixel Journey Design System.

---

## Technical Architecture & Best Practices

- **Stack**: Next.js 15, TypeScript, Tailwind + shadcn/ui, React Flow or D3 for graph
- **Data**: AtomicAssets transfers + Hyperion with efficient fetching and graph building
- **Performance**: Client-side graph processing with React Query caching
- **Demo Mode**: Full interactive graph with pre-loaded realistic wash examples

See catalog standards for WAX rate limiting and history best practices.

---

## Demo & Usage

- Explore pre-loaded collections with known wash patterns
- Select a collection or enter specific asset IDs
- View highlighted wash cycles and wallet clusters
- Explore the activity timeline
- Export flagged patterns or reports

Designed for immediate insight into marketplace health.

---

## Customization

- Adjust cycle detection sensitivity and cluster thresholds
- Add support for specific collections or asset types
- Integrate with other marketplace tools in the catalog (velocity scatter, royalty auditor, etc.)
- Customize graph styling and output

---

## Roadmap

- v1: Core flow graph + cycle detection + demo
- v1.1: Advanced cluster analysis and historical playback
- Future: Deeper integration with wash trading deduplication and compliance tools

---

## Contributing & Credits

Built with care for healthier NFT marketplaces on WAX.

MIT License.

Following the production-quality educational standards from the gkniftyheads-tracker.

---

*Pixel Journey — Making Web3 interfaces pixel-perfect and delightful.*