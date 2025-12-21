# SEO Landing Page Prompt System

## 🎯 Overview

This directory contains a two-prompt AI system for generating SEO-optimized landing pages at scale.

### The Problem
Previously, the keyword strategy and page generation were combined in one prompt, leading to:
- Inconsistent outputs
- Repeated strategy discussions
- Difficulty scaling beyond 10 pages
- Human babysitting required

### The Solution
**Two specialized prompts working together:**

1. **Keyword Blueprint Generator** (Architect)
   - Runs ONCE per keyword batch
   - Converts strategic brain dump into structured data
   - Outputs normalized build instructions

2. **Landing Page Execution** (Construction Crew)
   - Runs ONCE per keyword
   - Consumes blueprint fields
   - Generates complete landing page

---

## 📋 The Two Prompts

### 1. `keyword-blueprint-generator.md`

**Purpose:** Transform messy keyword strategy into clean, machine-readable build instructions.

**Input:** 
- Keyword list with volume, intent, competition
- Strategic notes and market reasoning

**Output:**
13-field blueprint per keyword:
- Primary Keyword
- Secondary Variants
- Search Intent
- Page Type
- URL Slug
- H1 Formula
- Content Angles
- Target Audience
- Pricing Visibility
- Internal Links
- FAQ Themes
- Priority Tier
- Execution Notes

### 2. `landing-page-execution.md`

**Purpose:** Build a complete, conversion-optimized landing page from blueprint data.

**Input:**
- One keyword blueprint (13 fields)

**Output:**
- Complete React/TypeScript landing page component
- SEO optimized
- Design system integrated
- Mobile responsive
- Multiple CTAs
- Structured data

---

## 🔄 Workflow

### Step 1: Run Keyword Blueprint Generator (One Time)
```
1. Open keyword-blueprint-generator.md
2. Paste your keyword list into INPUT section
3. Run through AI (ChatGPT, Claude, Cursor, etc.)
4. Save the structured output
```

**Example Output:**
```
1. Primary Keyword: massage canggu
   Secondary Variants: best massage canggu, home massage canggu, massage echo beach
   Search Intent: Local + Commercial
   Page Type: Location Landing Page
   URL Slug: /massage-canggu/
   ...
```

### Step 2: Run Landing Page Execution (Per Keyword)
```
1. Open landing-page-execution.md
2. Pick keyword #1 from blueprint
3. Paste its fields into the prompt
4. Generate complete page
5. Repeat for keyword #2, #3, etc.
```

### Step 3: Scale Effortlessly
```
No re-strategizing
No content drift
No entropy
Just consistent, high-quality pages
```

---

## 🎨 Design System Integration

All generated pages use the existing design system:
- `src/config/designSystem.ts` - Constants and patterns
- `src/config/site.ts` - Business configuration
- Consistent hero gradients, spacing, typography
- Standard CTA buttons and messaging
- Mobile-first responsive design

---

## 📊 Example: 10 High-Volume Keywords

The keyword blueprint generator includes these pre-loaded examples:

1. **massage canggu** - Surfer recovery & digital nomad focus
2. **couples massage bali** - Privacy & villa experience
3. **cheap massage bali** - Price comparison emphasis
4. **spa near me** - Mobile-first, instant booking
5. **massage sanur** - Family-oriented, softer tone
6. **nusa dua massage** - Luxury positioning
7. **thai massage bali** - Stretching & no-oil distinction
8. **aromatherapy massage bali** - Oil benefits focus
9. **hot stone massage bali** - Therapeutic upgrade
10. **mobile massage bali** - Core differentiator, convenience

---

## 💡 Why This Works

### Separation of Concerns
- **Strategy** happens once
- **Execution** happens many times
- No mixing = no confusion

### Consistency
- All pages follow same structure
- Same design patterns
- Same SEO optimization
- Same conversion elements

### Scalability
- Can scale to 50-200 pages
- Junior staff can run execution prompt
- Works with automation tools (n8n, LangFlow)
- Can be converted to JSON for APIs

### Quality Control
- Blueprint is reviewable before building
- Execution follows strict requirements
- Technical checklist prevents errors
- Design system ensures brand consistency

---

## 🚀 Advanced Usage

### Convert to JSON
Blueprint output can be structured as JSON for programmatic use:
```json
{
  "keywords": [
    {
      "primaryKeyword": "massage canggu",
      "secondaryVariants": ["best massage canggu", "home massage canggu"],
      "searchIntent": "Local + Commercial",
      "pageType": "Location Landing Page",
      ...
    }
  ]
}
```

### Cursor Integration
1. Save blueprint as Cursor snippet
2. Create custom command to generate pages
3. Automate page creation workflow

### CI/CD Pipeline
1. Blueprint in version control
2. Automated page generation
3. Preview deployments
4. Bulk updates possible

---

## 📈 Scaling Strategy

### Phase 1: Initial 10 Keywords (Week 1)
- Run blueprint generator
- Generate 10 pages manually
- Verify quality and consistency

### Phase 2: Next 20 Keywords (Week 2-3)
- Refine blueprint based on learnings
- Generate pages in batches
- Junior team members can help

### Phase 3: Scale to 50-100 Keywords (Month 2)
- Automate with scripts/tools
- Bulk generation possible
- Focus on QA and optimization

### Phase 4: 100-200+ Keywords (Month 3+)
- Full automation pipeline
- Continuous deployment
- A/B testing and optimization

---

## ✅ Quality Standards

Every generated page must have:
- Primary keyword in H1, URL, meta tags
- All secondary keywords used naturally
- All internal links from blueprint
- FAQ addressing specified themes
- Design system patterns used correctly
- Multiple CTAs throughout
- Mobile responsive design
- TypeScript type safety
- No console errors
- Build passes successfully

---

## 🔧 Tools & Compatibility

Works with:
- ChatGPT (GPT-4)
- Claude (Sonnet/Opus)
- Cursor AI
- GitHub Copilot
- n8n workflows
- LangChain/LangFlow
- Custom automation scripts

---

## 📚 Related Documentation

- `/DESIGN_SYSTEM.md` - Design standards and patterns
- `/IMPLEMENTATION_SUMMARY.md` - System architecture
- `/src/config/designSystem.ts` - Technical constants
- `/src/templates/` - Existing page templates

---

## 🎯 Success Metrics

With this system, you should achieve:
- **10x faster** page creation
- **95%+ consistency** across pages
- **Zero strategy drift** over time
- **Junior-level execution** possible
- **50-200 pages** scalable
- **Automation-ready** architecture

---

## 💬 Questions & Support

For questions about:
- **Strategy**: Review keyword-blueprint-generator.md
- **Execution**: Review landing-page-execution.md
- **Design**: Check /DESIGN_SYSTEM.md
- **Technical**: See /src/config/designSystem.ts

---

## 🔑 Key Principle

> "You need two prompts, not one:
> 1. Keyword Blueprint Prompt → architect
> 2. Landing Page Execution Prompt → construction crew
> 
> Stop asking one prompt to do both jobs."

This is your SEO machine's missing spine.
Now it has bones.
