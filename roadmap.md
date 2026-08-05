# Low-Level Design Interview Roadmap

## Goal
Build confidence in object-oriented design, common patterns, and interview communication so you can solve low-level design questions clearly and quickly.

---

## Phase 1: Foundations (1 week)

### Objectives
- Review core OOP concepts
- Learn SOLID principles
- Understand when and why to use patterns

### Focus areas
- Classes and objects
- Inheritance vs composition
- Abstraction and interfaces
- Encapsulation and cohesion
- SRP, OCP, LSP, ISP, DIP

### Recommended reading
- `Head First Design Patterns` - introduction and first 5 patterns
- `Clean Architecture` - SOLID chapters
- O’Reilly search: `Object-Oriented Design`, `Design Patterns`

### Practice problems
- Parking lot
- Library system
- Vending machine

---

## Phase 2: Core pattern-based design (2 weeks)

### Objectives
- Apply patterns in simple systems
- Practice sketching class diagrams
- Solve 1–2 problems per day

### Patterns to revisit
- Factory
- Singleton
- Strategy
- Adapter
- Observer
- Decorator

### Recommended reading
- `Head First Design Patterns`:
  - Strategy
  - Observer
  - Decorator
  - Factory Method / Abstract Factory
  - Adapter
  - Command
- `Design Patterns: Elements of Reusable Object-Oriented Software`:
  - Creational patterns
  - Structural patterns
  - Behavioral patterns

### Practice problems
- Hotel reservation system
- Online shopping cart
- Elevator controller
- Notification service
- Cache / LRU cache

---

## Phase 3: Increasing complexity (2 weeks)

### Objectives
- Add real requirements and constraints
- Use interfaces and abstractions to support extension
- Explain tradeoffs clearly

### Complexity steps
1. Build the basic model first.
2. Add business rules.
3. Add edge cases and error handling.
4. Add extensibility points with interfaces or strategy.
5. Add optional features like notifications or rules.

### Example expansions
- Parking lot ➜ multiple floors, reserved slots, dynamic pricing, charging stations
- Library ➜ multiple branches, reservations, fines, search
- Vending machine ➜ coin handling, refill, maintenance mode
- Cache ➜ TTL, eviction, persistence adapter
- Notification system ➜ email/SMS/push, retry, user preferences

### Recommended reading
- `Design It!` - problem framing and tradeoffs
- `Clean Architecture` - boundaries and testable design
- `Design Patterns` - command, template method, proxy

---

## Phase 4: Interview readiness (2 weeks)

### Objectives
- Practice design aloud
- Do mock interviews
- Review and improve communication

### Key habits
- Ask clarifying questions first.
- State assumptions clearly.
- Identify entities and APIs before coding.
- Describe tradeoffs and alternatives.
- Refactor while explaining why.
- Use diagrams or pseudo-code.

### Practice routine
- 1 problem per day, fully designed end-to-end.
- 1 mock interview or peer review per week.
- Review at least 3 past solutions and improve them.

### Recommended reading
- `Head First Design Patterns` - revisit any unclear patterns
- `Clean Architecture` - test cases and separation of concerns
- O’Reilly learning paths: `System Design Interview`, `Object-Oriented Design`

---

## Weekly schedule example

### Week 1
- Day 1: OOP review + Parking lot
- Day 2: Library system + SOLID
- Day 3: Vending machine + Factory/Strategy
- Day 4: Hotel booking + Observer/Decorator
- Day 5: Elevator control + Adapter
- Day 6: Review + refine 2 designs
- Day 7: Mock problem + explain aloud

### Week 2
- Day 1: Cache design + LRU
- Day 2: Notification service + Observer/Strategy
- Day 3: Shopping cart + Factory/Decorator
- Day 4: Add complexity to one system
- Day 5: Read `Clean Architecture` + refactor
- Day 6: Mock interview run-through
- Day 7: Review progress and adjust plan

---

## Tips for success
- Focus on clarity, not cleverness.
- Use small, incremental design steps.
- Apply patterns only when they simplify the design.
- Keep designs loosely coupled and easy to change.
- Explain decisions, not just code.

---

## Useful problems list
- Parking lot
- Library system
- Vending machine
- Hotel reservation
- Elevator system
- Shopping cart
- Notification system
- Cache / LRU cache
- User session manager
- Payment gateway
- Inventory/order service
- File upload and processing

---

## Notes
- If you want, I can also add a second roadmap file with a personalized daily plan for the next 30 days.
