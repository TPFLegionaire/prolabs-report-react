import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {showIntro && (
        <div className="intro">
          <h1>Welcome to ProLabs Opportunity Report</h1>
        </div>
      )}
      <header>
        <h1>HONGKONG PALMCORE TECHNOLOGY CO., LIMITED OPPORTUNITY REPORT</h1>
        <p className="confidential">— PROLABS CONFIDENTIAL —</p>
        <p style={{ textAlign: 'center', color: '#ffffff' }}>Date: 10 Jul 2025</p>
      </header>

      <section id="snapshot" style={{ animationDelay: 'calc(0.2s * 1)' }}>
        <h2>OPPORTUNITY SNAPSHOT</h2>
        <div className="snapshot">
          <div className="part">
            <h3>Part 1: JNP-100G-AOCBO-7M-C</h3>
            <p>(100 G QSFP28 to 4x25 G SFP28 active optical breakout cable, 7 m)</p>
            <ul>
              <li>Quantity requested: 5–5 pcs (inbound Date not stated)</li>
              <li>Cost price: USD 172 each</li>
              <li>Estimated order value (cost basis): USD 860</li>
              <li>Available inventory: 6 units ex-stock; lead-time ≤ 1 week</li>
            </ul>
          </div>
          <div className="part">
            <h3>Part 2: QSFP-4SFP25G-AOC10M-C</h3>
            <p>(QSFP28 to 4x25 G SFP28 active optical breakout cable, 10 m)</p>
            <ul>
              <li>Quantity requested: 5–5 pcs (inbound Date not stated)</li>
              <li>Cost price: USD 159 each</li>
              <li>Estimated order value (cost basis): USD 795</li>
              <li>Available inventory: 0 units ex-stock; lead-time 27 days</li>
            </ul>
          </div>
        </div>
        <p>Combined initial opportunity value at cost: <span className="highlight">USD 1,655</span>. Assuming standard distributor uplift of 18–20 %, potential revenue to ProLabs: <span className="highlight">USD 1,950–2,000</span>.</p>
      </section>

      <section id="customer-profile" style={{ animationDelay: 'calc(0.2s * 2)' }}>
        <h2>CUSTOMER PROFILE</h2>
        <p>Hong Kong Palmcore Technology Co., Ltd. (Palmcore) is a hybrid electronic-component distributor established in 2014. Head office and bonded warehouse are in Hong Kong, with branch sales offices in Shenzhen (Futian) and Shanghai (Minhang).</p>
        <p>Palmcore services OEM, ODM and EMS customers across the Pearl River Delta and Yangtze River Delta manufacturing clusters, offering strategic sourcing, shortage mitigation, VMI services, demand-forecast sharing and small-parcel export logistics.</p>
        <p>ProLabs sales history: None in last 24 months.</p>
        <p>Contact: Roy (Purchasing). Tel CN: +86 189 2131 3130. Tel HK: +852 2126 7499. Email: roy.luo.isz@foxmail.com.</p>
      </section>

      <section id="competitive-landscape" style={{ animationDelay: 'calc(0.2s * 3)' }}>
        <h2>COMPETITIVE LANDSCAPE</h2>
        <p>Customer did not mention rivals or target pricing. In similar HK-Shenzhen accounts, grey-market AOC suppliers offer 100 G to 4x25 G breakouts at USD 150–160 (7 m) and USD 140–150 (10 m) ex-works. These cables lack industrial-temperature spec, serial-number traceability and lifetime warranty.</p>
        <p>ProLabs advantages:</p>
        <ul>
          <li>Industrial-temp operation –40 °C to +85 °C (key for outdoor 5 G radios and factory automation).</li>
          <li>Lifetime warranty and 100 % traffic test.</li>
          <li>HK/APAC hub stock and 72-hour global RMA swap.</li>
          <li>Local-language FAE support (Mandarin and Cantonese).</li>
          <li>EAR99 classification – no ITAR, simplifying cross-border moves.</li>
        </ul>
      </section>

      <section id="expansion" style={{ animationDelay: 'calc(0.2s * 4)' }}>
        <h2>EXPANSION & CROSS-SELL POTENTIAL</h2>
        <p>Near-term: Additional 10 G SR/LR optics for Wi-Fi 7 enterprise AP backhaul and SMB access switches; 3 m and 5 m DACs for TOR switching.</p>
        <p>Mid-term: 25 G SFP28 SR/LR, 50 G and 100 G DAC/AOC for 5 G O-RU and AI edge clusters.</p>
        <p>Long-term: 200 G QSFP56 and 400 G QSFP-DD DAC/AOC for AI/ML datacentres newly planned in Guangdong Free Trade Zone.</p>
        <p>Annualised revenue potential: Medium ≈ USD 50 k at current run-rate; upside to USD 250 k within 18 months if Palmcore converts key EMS projects and new 400 G lines launch.</p>
      </section>

      <section id="risk-assessment" style={{ animationDelay: 'calc(0.2s * 5)' }}>
        <h2>RISK ASSESSMENT</h2>
        <ul>
          <li>Stock coverage: 6 ready units vs demand for 10 total; fulfilment risk moderate. Expedite allocation from UK buffer if second PO exceeds HK stock.</li>
          <li>Pricing pressure: Grey-market likely to target ≤ USD 163 (7 m) and ≤ USD 150 (10 m). Set Minimum Advertised Price (MAP) at USD 199 and USD 185 respectively; allow tiered discounts for volume.</li>
          <li>Credit exposure: New account; start on full pre-pay (T/T in advance) for first two orders.</li>
          <li>Compliance & quality: Palmcore claims ISO 9001 and ANSI/ESD-20.20 compliance, but no dedicated optical test lab. ProLabs must train staff on inspection, quarantine and serial-number capture.</li>
          <li>Logistics: Palmcore uses DHL, FedEx and SF Express daily; HK bonded status allows duty-free re-export into PRC.</li>
          <li>Channel leakage: Hybrid broker model carries risk of diversion to unauthorised resale. Mitigation: enforce serial-number traceability, quarterly POS/POE reporting, deal-registration for projects and audit rights.</li>
        </ul>
      </section>

      <section id="next-steps" style={{ animationDelay: 'calc(0.2s * 6)' }}>
        <h2>RECOMMENDED NEXT STEPS</h2>
        <ul>
          <li>Issue formal quote: 5 pcs JNP-100G-AOCBO-7M-C @ USD 205 (approx. 19 % margin), FOB HK, valid 15 days — Owner Inside Sales — ETA 11 Jul 2025.</li>
          <li>5 pcs QSFP-4SFP25G-AOC10M-C @ USD 190 (approx. 20 % margin), lead-time 27 days, FOB HK, valid 15 days — Owner Inside Sales — ETA 11 Jul 2025.</li>
          <li>Offer two free demo units (one per part) — Owner FAE — ship by 14 Jul 2025.</li>
          <li>Request six-month demand forecast and preferred Incoterms — Owner Account Manager — by 18 Jul 2025.</li>
          <li>Schedule technical call on 25 G/100 G roadmap — Owner BDM APAC — by 22 Jul 2025.</li>
          <li>Conduct distributor due-diligence audit (ISO cert, anti-counterfeit policy, financials, two OEM references) — Owner Quality — complete by 31 Jul 2025.</li>
          <li>Target initial PO closure by 25 Jul 2025; aim for USD 20 k total by Q4 2025 with incremental 10 G SR and 25 G SFP28 optics.</li>
        </ul>
      </section>

      <section id="partnership-analysis" style={{ animationDelay: 'calc(0.2s * 7)' }}>
        <h2>OEM / DISTRIBUTION PARTNERSHIP ANALYSIS</h2>
        <p>Palmcore combines authorised distribution for select franchises with open-market shortage broking, positioning itself as a flexible supply-chain partner to mid-tier OEMs and EMS providers. Their HK bonded warehouse enables same-day shipping into South-China plants, while the Shenzhen office manages design-in support and VMI programmes.</p>
        <p>Customers span Wi-Fi CPE makers, IPC/PLC vendors and industrial automation firms transitioning to 10 G and 25 G uplinks.</p>
        <h3>Strengths:</h3>
        <ul>
          <li>Geographic proximity to key EMS sites, reducing transit from ProLabs HK hub to factory line-side to <24 h.</li>
          <li>Existing VMI and demand-forecast infrastructure that aligns with ProLabs’ supply-chain optimisation goals.</li>
          <li>Broad BOM ownership at customers gives Palmcore early visibility on new platform builds where optics can be bundled.</li>
        </ul>
        <h3>Weaknesses:</h3>
        <ul>
          <li>Limited in-house optical test capability could impede rapid RMA screening; ProLabs must supply loopback test tools and arrange quarterly FAE clinics.</li>
          <li>Hybrid broker model risks price-only positioning and channel leakage. Strict MAP, serial-number verification and contractually mandated POS reporting are required.</li>
        </ul>
        <h3>Opportunities:</h3>
        <ul>
          <li>Launch Palmcore as a stocking distributor for AOC/DAC and 10 G SR/LR optics, with design-registration rebates to encourage proactive selling rather than passive fulfilment.</li>
          <li>Co-host a Mandarin webinar on 25 G optics for Wi-Fi 7 access switches and industrial AI gateways, leveraging Palmcore’s 8 000+ engineer contact base.</li>
          <li>Exhibit jointly at CIOE 2025 (Shenzhen) to showcase ProLabs 400 G and 800 G cable solutions; Palmcore sponsors booth space and local marketing.</li>
        </ul>
        <h3>Threats:</h3>
        <ul>
          <li>Aggressive Chinese ODM optics brands may undercut pricing by 25 % and offer extended payment terms. Maintain differentiation via industrial-temp spec, lifetime warranty and local FAE included in price.</li>
          <li>Exchange-rate volatility (USD/CNY, USD/HKD) could erode Palmcore’s margin; suggest quoting in USD but allowing HKD settlement at spot on payment date.</li>
        </ul>
        <p>Conclusion: Palmcore is a credible candidate for second-tier stocking distribution in South China, capable of driving incremental demand in AOC/DAC and short-reach optics segments. With robust channel controls, technical enablement and a graduated credit policy, a partnership could yield USD 50–75 k revenue in the first 12 months and scale toward USD 250 k as higher-speed products launch.</p>
      </section>

      <section id="pricing-caveat" style={{ animationDelay: 'calc(0.2s * 8)' }}>
        <h2>PRICING CAVEAT</h2>
        <p>All prices are preliminary estimates based on the cost prices provided. Final transactional pricing is subject to ProLabs quotation approval, confirmed volumes, target margins and prevailing market conditions.</p>
      </section>

      <footer>
        <p>Target Audience: VP Sales | ProLabs Confidential</p>
      </footer>
    </div>
  );
}

export default App;