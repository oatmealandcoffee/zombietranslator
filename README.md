# what rules you implemented

* upper- and lower-case 'Y' to 'yz'
* upper- and lower-case 'Z' to 'zh'

# what 3 expects you used and where

In all 10 rules as part of a test for the rule itself:

    expect( tx.translate( str, tokens, dir ) ).toBe( zb );

Individual rules follow:

"should translate \'.\' (period) to \'.!?\'"

    expect( tx.OC_TOKENS ).toBeDefined();
    expect( tokens.en ).toMatch( tokens.enr );

"should translate lower-case \'r\' to \'rh\'"

    expect( tx ).not.toBeNull();
    expect( tx ).toBeTruthy();

 "should translate upper-case \'R\' to \'RR\'"

    expect( tx.foobar ).toBeUndefined();
    expect( f ).toThrow();

"should translate upper- and lower-case \'E\' to \'rr\'"

    expect( tx ).not.toBeUndefined();
    expect( tx ).toBeNull();

 "should translate upper- and lower-case \'I\' to \'rrRr\'"

    expect( tx.foobar ).not.toBeTruthy();
    expect( tx.foobar ).toBeFalsy();

"should translate upper- and lower-case \'O\' to \'rrrRr\'"

    expect( f ).not.toThrow();
    expect( typeof tokens ).not.toBe( 'string' );

"should translate upper- and lower-case \'U\' to \'rrrrRr\'"

    expect( tx.OC_E2Z ).not.toBe( 42 );
    expect( tokens.en ).not.toMatch( tokens.zbr );

"should translate standalone upper- and lower-case \'A\' to \'hra\'"

    expect( zb ).not.toBe( typeof Number );
    expect( tokens ).not.toContain( {} );

"should translate upper- and lower-case \'Y\' to \'yz\'"

    expect( typeof tx ).not.toBe( 'function' );
    expect( tx.foobar ).toBe( undefined );

"should translate upper- and lower-case \'Z\' to \'zh\'"

    expect( tx.foobar ).not.toBeDefined();
    expect( typeof tx ).toBe( 'object' );
