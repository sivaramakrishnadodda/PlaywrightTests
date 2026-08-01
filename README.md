Playwright installation      ---     npm init playwright@latest
select launguage : Typescript
Select the tests folder : tests
Github actions : N  means no
finally we got 'Happy Hacking' 
Playwright installed successfully



Test executionn: ------   
1. If we want execute all test cases:                npx playwright test  
2. If we want to execute single testcase:            npx playwright example.spec.ts
3. If we want to execute group of test cases :       npx playwright test --grep @sanity
4. group of TC and specific browser :                npx playwright test --headed --project chromium --grep @sanity


Headed mode :    ------    npx playwright test --headed      (We can see how the playwright interact with website visually)
Run test on specific browsers :  ---- 1.   npx playwright test --project webkit
                                      2.   npx playwright test --project webkit --project firefox
                                      3.   npx playwright test --project chromium


Show the report:    npx playwright show-report
codegen for tc generation:    npx playwright codegen websitename




want to see code execution in slow motion add below code snippet in the playwright.config.ts file under use section
  launchOptions: {
      slowMo:300,
    }



Important:       npx playwright --ui


changes











