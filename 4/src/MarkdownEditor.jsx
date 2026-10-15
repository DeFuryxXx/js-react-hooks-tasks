import React, { useRef, useEffect } from 'react';
import Editor from '@toast-ui/editor';

const MarkdownEditor = ({ onContentChange }) => {
  // BEGIN (write your solution here)
 const containerRef = useRef(null);
  const onContentChangeRef = useRef(onContentChange);
  onContentChangeRef.current = onContentChange;

  useEffect(() => {
    const editor = new Editor({
      el: containerRef.current,
      hideModeSwitch: true,
    });

    editor.addHook('change', () => {
      onContentChangeRef.current(editor.getMarkdown());
    });

    return () => {
      editor.destroy();
    };
  }, []);

  return <div ref={containerRef} />;

  // END
};

export default MarkdownEditor;
