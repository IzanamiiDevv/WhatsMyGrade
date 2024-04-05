//#include <emscripten.h>
#include <cstdio>
#include <cstring>
#include <cstdlib>

extern "C" {
    //EMSCRIPTEN_KEEPALIVE
    const char* evaluate(int grade) {
        if (grade >= 101) return "Invalid Grade";
        if (grade <= 100 && grade >= 98) return "With Highest Honors";
        if (grade <= 97 && grade >= 95) return "With High Honors";
        if (grade <= 94 && grade >= 90) return "With Honors";
        if (grade <= 89 && grade >= 75) return "Passed";
        if (grade <= 74) return "Failed";
        return "Invalid Input";
    }
}
