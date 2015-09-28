# what rules you implemented

* upper- and lower-case 'Y' to 'yz'
* upper- and lower-case 'Z' to 'zh'

Please see [Urban Dead wiki](http://wiki.urbandead.com/index.php/Zombie_Speech_Translators) for the variance away from the heavy use of 'R' and 'r'.

# what 3 expects you used and where

In all 10 rules there is a test for the rule itself using its own tokens:

    expect( tx.translate( str, tokens, dir ) ).toBe( zb );

Individual rules follow:

"should translate \'r\' at the end of a sentence to \'rh\'"

    expect( tx.OC_TOKENS ).toBeDefined();
    expect( tokens.en ).toMatch( tokens.enr );

"should translate \'r\'s in words to \'RR\'"

    expect( tx ).not.toBeNull();
    expect( tx ).toBeTruthy();

"should translate upper-case \'Ee\' to \'rr\'"

    expect( tx.foobar ).toBeUndefined();
    expect( f ).toThrow();

"should translate upper- and lower-case \'Ii\' to \'rrRr\'"

    expect( tx ).not.toBeUndefined();
    expect( tx ).toBeNull();

"should translate upper- and lower-case \'Oo\' to \'rrrRr\'"

    expect( tx.foobar ).not.toBeTruthy();
    expect( tx.foobar ).toBeFalsy();

"should translate upper- and lower-case \'Uu\' to \'rrrrRr\'"

    expect( f ).not.toThrow();
    expect( typeof tokens ).not.toBe( 'string' );

"should translate upper- and lower-case \'Aa\' to \'hra\'"

    expect( tx.OC_E2Z ).not.toBe( 42 );
    expect( tokens.en ).not.toMatch( tokens.zbr );

"should translate standalone upper- and lower-case \'y\' to \'yz\'"

    expect( zb ).not.toBe( typeof Number );
    expect( tokens ).not.toContain( {} );

"should translate upper- and lower-case \'Zz\' to \'zh\'"

    expect( typeof tx ).not.toBe( 'function' );
    expect( tx.foobar ).toBe( undefined );

"should fix sentence case"

    expect( tx.foobar ).not.toBeDefined();
    expect( typeof tx ).toBe( 'object' );
